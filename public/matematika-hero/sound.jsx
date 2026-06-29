(function() {
  var _ac = null, _master = null, _ambient = null, _muted = true;
  var _subs = [];

  function _notify() {
    _subs.forEach(function(fn) { try { fn(_muted); } catch(e){} });
  }

  function _getAC() {
    if (!_ac) {
      var AC = window.AudioContext || window.webkitAudioContext;
      _ac = new AC();
      _master = _ac.createGain();
      _master.gain.value = 0;
      _master.connect(_ac.destination);
    }
    if (_ac.state === 'suspended') _ac.resume();
    return _ac;
  }

  function _startAmbient(ac) {
    if (_ambient) return;
    var padGain = ac.createGain();
    padGain.gain.setValueAtTime(0, ac.currentTime);
    padGain.gain.linearRampToValueAtTime(0.08, ac.currentTime + 2);
    padGain.connect(_master);
    [[110,0.4],[165,0.3],[220,0.22]].forEach(function(pair, i) {
      var osc = ac.createOscillator(); osc.type = 'sine'; osc.frequency.value = pair[0];
      var lfo = ac.createOscillator(); lfo.frequency.value = 0.12 + i * 0.06;
      var lfoG = ac.createGain(); lfoG.gain.value = pair[0] * 0.004;
      lfo.connect(lfoG); lfoG.connect(osc.frequency); lfo.start();
      var og = ac.createGain(); og.gain.value = pair[1];
      osc.connect(og); og.connect(padGain); osc.start();
    });
    _ambient = padGain;
  }

  window.SOUND = {
    isMuted: function() { return _muted; },
    subscribe: function(fn) {
      _subs.push(fn);
      return function() { _subs = _subs.filter(function(f) { return f !== fn; }); };
    },
    toggle: function() {
      _muted = !_muted;
      if (!_muted) {
        var ac = _getAC();
        _startAmbient(ac);
        var now = ac.currentTime;
        _master.gain.cancelScheduledValues(now);
        _master.gain.setValueAtTime(0, now);
        _master.gain.linearRampToValueAtTime(1.0, now + 0.04);
        var beep = ac.createOscillator(); beep.type = 'sine'; beep.frequency.value = 880;
        var bg = ac.createGain();
        bg.gain.setValueAtTime(0.6, now);
        bg.gain.exponentialRampToValueAtTime(0.001, now + 0.9);
        beep.connect(bg); bg.connect(_master);
        beep.start(now); beep.stop(now + 0.95);
      } else {
        if (_master && _ac) {
          var t = _ac.currentTime;
          _master.gain.cancelScheduledValues(t);
          _master.gain.setTargetAtTime(0, t, 0.05);
        }
      }
      _notify();
    },
    play: function(name, opts) {
      if (_muted || !_ac) return;
      opts = opts || {};
      var ac = _getAC();
      if (!_ambient) _startAmbient(ac);
      var out = _master;
      var now = ac.currentTime;
      if (name === 'swoosh') {
        var sz = Math.floor(ac.sampleRate * 0.4);
        var buf = ac.createBuffer(1, sz, ac.sampleRate);
        var d = buf.getChannelData(0);
        for (var i = 0; i < sz; i++) d[i] = Math.random() * 2 - 1;
        var src = ac.createBufferSource(); src.buffer = buf;
        var flt = ac.createBiquadFilter(); flt.type = 'bandpass';
        flt.frequency.setValueAtTime(3500, now);
        flt.frequency.linearRampToValueAtTime(400, now + 0.35);
        flt.Q.value = 1.5;
        var g = ac.createGain(); g.gain.setValueAtTime(0.35, now);
        g.gain.exponentialRampToValueAtTime(0.001, now + 0.42);
        src.connect(flt); flt.connect(g); g.connect(out); src.start(now);
      } else if (name === 'appear') {
        var o = ac.createOscillator(); o.type = 'sine'; o.frequency.value = opts.freq || 1100;
        var ag = ac.createGain(); ag.gain.setValueAtTime(0.18, now);
        ag.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
        o.connect(ag); ag.connect(out); o.start(now); o.stop(now + 0.45);
      } else if (name === 'tick') {
        var o2 = ac.createOscillator(); o2.type = 'sine'; o2.frequency.value = 1300;
        var tg = ac.createGain(); tg.gain.setValueAtTime(0.2, now);
        tg.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
        o2.connect(tg); tg.connect(out); o2.start(now); o2.stop(now + 0.06);
      } else if (name === 'checkmark') {
        [660, 880].forEach(function(f, i) {
          var o3 = ac.createOscillator(); o3.type = 'sine'; o3.frequency.value = f;
          var cg = ac.createGain(); var t = now + i * 0.09;
          cg.gain.setValueAtTime(0, t); cg.gain.linearRampToValueAtTime(0.25, t + 0.02);
          cg.gain.exponentialRampToValueAtTime(0.001, t + 0.5);
          o3.connect(cg); cg.connect(out); o3.start(t); o3.stop(t + 0.55);
        });
      } else if (name === 'score-count') {
        for (var j = 0; j < 10; j++) {
          var o4 = ac.createOscillator(); o4.type = 'sine'; o4.frequency.value = 700 + j * 25;
          var scg = ac.createGain(); var st = now + j * 0.065;
          scg.gain.setValueAtTime(0.16, st); scg.gain.exponentialRampToValueAtTime(0.001, st + 0.045);
          o4.connect(scg); scg.connect(out); o4.start(st); o4.stop(st + 0.05);
        }
      } else if (name === 'success') {
        [440, 554.37, 659.25].forEach(function(f, i) {
          var o5 = ac.createOscillator(); o5.type = 'sine'; o5.frequency.value = f;
          var sg2 = ac.createGain(); var t2 = now + i * 0.13;
          sg2.gain.setValueAtTime(0, t2); sg2.gain.linearRampToValueAtTime(0.3, t2 + 0.03);
          sg2.gain.exponentialRampToValueAtTime(0.001, t2 + 1.4);
          o5.connect(sg2); sg2.connect(out); o5.start(t2); o5.stop(t2 + 1.5);
        });
      } else if (name === 'cta-whoosh') {
        var o6 = ac.createOscillator(); o6.type = 'sine';
        o6.frequency.setValueAtTime(180, now); o6.frequency.exponentialRampToValueAtTime(640, now + 0.35);
        var wg = ac.createGain(); wg.gain.setValueAtTime(0.25, now);
        wg.gain.exponentialRampToValueAtTime(0.001, now + 0.55);
        o6.connect(wg); wg.connect(out); o6.start(now); o6.stop(now + 0.6);
      } else if (name === 'error') {
        var o7 = ac.createOscillator(); o7.type = 'sawtooth';
        o7.frequency.setValueAtTime(280, now); o7.frequency.exponentialRampToValueAtTime(70, now + 0.18);
        var eg = ac.createGain(); eg.gain.setValueAtTime(0.16, now);
        eg.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
        o7.connect(eg); eg.connect(out); o7.start(now); o7.stop(now + 0.24);
      } else if (name === 'ping') {
        var o8 = ac.createOscillator(); o8.type = 'sine'; o8.frequency.value = opts.freq || 880;
        var pg = ac.createGain(); pg.gain.setValueAtTime(0.25, now);
        pg.gain.exponentialRampToValueAtTime(0.001, now + 0.7);
        o8.connect(pg); pg.connect(out); o8.start(now); o8.stop(now + 0.75);
      }
    }
  };

  // Thin React wrappers — toggle() calls window.SOUND.toggle() directly
  window.SoundContext = React.createContext(null);
  window.useSound = function() { return window.SOUND; };

  window.SoundProvider = function(props) {
    return React.createElement(React.Fragment, null, props.children);
  };

  window.SoundToggleBtn = function SoundToggleBtn() {
    var forceUpdate = React.useReducer(function(n) { return n + 1; }, 0)[1];
    var muted = window.SOUND.isMuted();
    var hover = React.useState(false);
    var setHover = hover[1];
    hover = hover[0];
    React.useEffect(function() {
      return window.SOUND.subscribe(function() { forceUpdate(); });
    }, []);
    return React.createElement('button', {
      onClick: function() { window.SOUND.toggle(); },
      title: muted ? 'Ukljuci zvuk' : 'Iskljuci zvuk',
      onMouseEnter: function() { setHover(true); },
      onMouseLeave: function() { setHover(false); },
      style: {
        width: 36, height: 36,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: muted
          ? (hover ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0.08)')
          : (hover ? 'rgba(80,220,120,0.45)' : 'rgba(80,220,120,0.25)'),
        border: '2px solid ' + (muted ? 'rgba(255,255,255,0.22)' : '#50dc78'),
        borderRadius: 8,
        color: muted ? 'rgba(255,255,255,0.55)' : '#50dc78',
        cursor: 'pointer', padding: 0,
        transition: 'all 120ms', flexShrink: 0,
        fontSize: 18, lineHeight: 1,
      }
    }, muted ? '🔇' : '🔊');
  };

})();
