/************************* 
 * Stop_Signal_Drop Test *
 *************************/

import { PsychoJS } from './lib/core-2020.1.js';
import * as core from './lib/core-2020.1.js';
import { TrialHandler } from './lib/data-2020.1.js';
import { Scheduler } from './lib/util-2020.1.js';
import * as util from './lib/util-2020.1.js';
import * as visual from './lib/visual-2020.1.js';
import * as sound from './lib/sound-2020.1.js';

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'Stop_Signal_Drop';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': ''};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  text: "Welcome. Make sure you type in your 'participation ID' and 'session number', then press 'Ok' to continue.",
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
const ImportLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(ImportLoopBegin, ImportLoopScheduler);
flowScheduler.add(ImportLoopScheduler);
flowScheduler.add(ImportLoopEnd);
flowScheduler.add(Instr_ExpRoutineBegin());
flowScheduler.add(Instr_ExpRoutineEachFrame());
flowScheduler.add(Instr_ExpRoutineEnd());
const SS_Prac_Block_LoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(SS_Prac_Block_LoopLoopBegin, SS_Prac_Block_LoopLoopScheduler);
flowScheduler.add(SS_Prac_Block_LoopLoopScheduler);
flowScheduler.add(SS_Prac_Block_LoopLoopEnd);
flowScheduler.add(Instr_SSRoutineBegin());
flowScheduler.add(Instr_SSRoutineEachFrame());
flowScheduler.add(Instr_SSRoutineEnd());
const SS_Block_LoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(SS_Block_LoopLoopBegin, SS_Block_LoopLoopScheduler);
flowScheduler.add(SS_Block_LoopLoopScheduler);
flowScheduler.add(SS_Block_LoopLoopEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'conditions.xlsx', 'path': './conditions.xlsx'},
    {'name': 'media/check.png', 'path': './media/check.png'},
    {'name': 'media/cross.png', 'path': './media/cross.png'},
    {'name': 'media/coin.wav', 'path': './media/coin.wav'},
    {'name': 'media/buzz.wav', 'path': './media/buzz.wav'}
  ]
  });


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.1.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var InitiationClock;
var screen_color;
var participant;
var session;
var block_count;
var t_pretrial;
var y_ball;
var y_line;
var t_max;
var ball_opacity;
var timing_tol;
var dist;
var speed;
var $min;
var $max;
var size_ball;
var size_ball_pretrial;
var y_ball_maintrial;
var t_overshoot;
var y_overshoot;
var dur_trial;
var dur_feedback;
var line_wd;
var line_col;
var ball_wd;
var sound_vol;
var order;
var grp;
var color_rnd;
var go_color;
var stop_color;
var ball_pol;
var num_block_prac;
var num_trial_prac;
var num_prac_crit;
var num_block;
var num_trial;
var StimList;
var dt_range;
var dt_interval;
var dt_ind;
var rng1
var rng2

var Instr_ExpClock;
var Instr_Exp_Text;
var Instr_Exp_Key;
var SS_Prac_Instr_Load_InfoClock;
var SS_Instr_PreTrialClock;
var Line_SS_Instr_PreTrial;
var Circle_SS_Instr_PreTrial;
var Score_SS_Intr_PreTrial;
var Ball_SS_Instr_PreTrial;
var Text_1_SS_Instr_PreTrial;
var Text_2_SS_Instr_PreTrial;
var Text_3_SS_Instr_PreTrial;
var Resp_SS_Instr_PreTrial;
var SS_Instr_MainTrialClock;
var Line_SS_Instr_MainTrial;
var Score_SS_Instr_MainTrial;
var Ball_SS_Instr_MainTrial;
var Text_1_SS_Instr_MainTrial;
var Text_2_SS_Instr_MainTrial;
var Text_3_SS_Instr_MainTrial;
var Resp_SS_Instr_MainTrial;
var SS_Prac_CountDownClock;
var Line_SS_Prac_CountDown;
var Text_SS_Prac_CountDown;
var Score_SS_Prac_CountDown;
var SS_Prac_PreTrialClock;
var ct;
var Line_SS_Prac_PreTrial;
var Score_SS_Prac_PreTrial;
var Circle_SS_Prac_PreTrial;
var Ball_SS_Prac_PreTrial;
var SS_Prac_MainTrialClock;
var ball_opa;
var press;
var Line_SS_Prac_MainTrial;
var Score_SS_Prac_MainTrial;
var Ball_SS_Prac_MainTrial;
var Resp_SS_Prac_MainTrial;
var SS_Prac_PostTrialClock;
var Sound_SS_Prac_PostTrial;
var Line_SS_Prac_PostTrial;
var Image_SS_Prac_PostTrial;
var Score_SS_Prac_PostTrial;
var Ball_SS_Prac_PostTrial;
var Instr_SSClock;
var Instr_SS_Text;
var Instr_SS_Key;
var SS_Instr_Load_InfoClock;
var Instr_Block_NumClock;
var Text_Instr_Block_Num;
var Resp_Instr_Block_Num;
var SS_CountDownClock;
var Line_SS_CountDown;
var Text_SS_CountDown;
var SS_PreTrialClock;
var Line_SS_PreTrial;
var Circle_SS_PreTrial;
var Ball_SS_PreTrial;
var SS_MainTrialClock;
var Line_SS_MainTrial;
var Ball_SS_MainTrial;
var Resp_SS_MainTrial;
var SS_PostTrialClock;
var Sound_SS_PostTrial;
var Line_SS_PostTrial;
var Image_SS_PostTrial;
var Ball_SS_PostTrial;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "Initiation"
  InitiationClock = new util.Clock();
  screen_color = [0, 0, 0];
  participant = Number.parseInt(expInfo["participant"]);
  session = Number.parseInt(expInfo["session"]);
  block_count = 1;
  t_pretrial = 0.6;
  y_ball = 0.4;
  y_line = (- 0.3);
  t_max = 0.5;
  ball_opacity = [];
  timing_tol = 0.03;
  dist = (y_ball - y_line);
  speed = (dist / t_max);
  $min = (speed * (t_max - timing_tol));
  $max = (speed * (t_max + timing_tol));
  size_ball = ($max - $min);
  size_ball_pretrial = [];
  y_ball_maintrial = [];
  t_overshoot = (timing_tol * 4);
  y_overshoot = ((- (speed * t_overshoot)) + y_line);
  dur_trial = (t_max + t_overshoot);
  dur_feedback = 0.5;
  line_wd = 0.5;
  line_col = [1, 1, 1];
  sound_vol = 1;

  var myrng = new Math.seedrandom(participant);   //use new here so it does not affect Math.random()
  rng1 = myrng()
  rng2 = myrng()
  
  grp = 0;
  if ((rng1 < 0.5)) {
      grp = 1;
  }
  
  go_color = [1, 1, 1];
  stop_color = [(- 1), (- 1), (- 1)];
  if ((rng2 < 0.5)) {
      go_color = [(- 1), (- 1), (- 1)];
      stop_color = [1, 1, 1];
  }
  ball_pol = 1600;
  ball_wd = 6;
  num_block_prac = 2;
  num_trial_prac = 2000;
  num_prac_crit = 4;
  num_block = 12;
  num_trial = 10;
  StimList = [];
  dt_range = [0.05, 0.5];
  dt_interval = [];
  dt_ind = [];
  dt_interval = [[dt_range[0], 0.125], [0.125, 0.2], [0.2, 0.275], [0.275, 0.35], [0.35, 0.425], [0.425, dt_range[1]], [(- 98.5), (- 98.5)]];
  // prob = [0.1, 0.2, 0.2, 0.2, 0.2, 0.1];
  // num = [3, 6, 6, 6, 6, 3, 70];
  dt_ind = ((((((([0] * 3) + ([1] * 6)) + ([2] * 6)) + ([3] * 6)) + ([4] * 6)) + ([5] * 3)) + ([6] * 70));
  util.shuffle(dt_ind);
  
  // Initialize components for Routine "Instr_Exp"
  Instr_ExpClock = new util.Clock();
  Instr_Exp_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instr_Exp_Text',
    alignText: 'center',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  Instr_Exp_Key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "SS_Prac_Instr_Load_Info"
  SS_Prac_Instr_Load_InfoClock = new util.Clock();
  // Initialize components for Routine "SS_Instr_PreTrial"
  SS_Instr_PreTrialClock = new util.Clock();
  Line_SS_Instr_PreTrial = new visual.ShapeStim ({
    win: psychoJS.window, name: 'Line_SS_Instr_PreTrial', units : 'height', 
    vertices: [[-[2, 0.5][0]/2.0, 0], [+[2, 0.5][0]/2.0, 0]],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  Circle_SS_Instr_PreTrial = new visual.Polygon ({
    win: psychoJS.window, name: 'Circle_SS_Instr_PreTrial', units : 'height', 
    edges: 1000, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color(undefined),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  Score_SS_Intr_PreTrial = new visual.TextStim({
    win: psychoJS.window,
    name: 'Score_SS_Intr_PreTrial',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0.7, 0], height: 0.2,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1.0,
    depth: -3.0 
  });
  
  Ball_SS_Instr_PreTrial = new visual.Polygon ({
    win: psychoJS.window, name: 'Ball_SS_Instr_PreTrial', units : 'height', 
    edges: 1000, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 0, lineColor: new util.Color(undefined),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -4, interpolate: true,
  });
  
  Text_1_SS_Instr_PreTrial = new visual.TextStim({
    win: psychoJS.window,
    name: 'Text_1_SS_Instr_PreTrial',
    alignText: 'center',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  Text_2_SS_Instr_PreTrial = new visual.TextStim({
    win: psychoJS.window,
    name: 'Text_2_SS_Instr_PreTrial',
    alignText: 'center',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0.5, 0.15], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -6.0 
  });
  
  Text_3_SS_Instr_PreTrial = new visual.TextStim({
    win: psychoJS.window,
    name: 'Text_3_SS_Instr_PreTrial',
    alignText: 'center',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -7.0 
  });
  
  Resp_SS_Instr_PreTrial = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "SS_Instr_MainTrial"
  SS_Instr_MainTrialClock = new util.Clock();
  Line_SS_Instr_MainTrial = new visual.ShapeStim ({
    win: psychoJS.window, name: 'Line_SS_Instr_MainTrial', units : 'height', 
    vertices: [[-[2, 0.5][0]/2.0, 0], [+[2, 0.5][0]/2.0, 0]],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  Score_SS_Instr_MainTrial = new visual.TextStim({
    win: psychoJS.window,
    name: 'Score_SS_Instr_MainTrial',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0.7, 0], height: 0.2,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1.0,
    depth: -2.0 
  });
  
  Ball_SS_Instr_MainTrial = new visual.Polygon ({
    win: psychoJS.window, name: 'Ball_SS_Instr_MainTrial', units : 'height', 
    edges: 1000, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 0, lineColor: new util.Color(undefined),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -3, interpolate: true,
  });
  
  Text_1_SS_Instr_MainTrial = new visual.TextStim({
    win: psychoJS.window,
    name: 'Text_1_SS_Instr_MainTrial',
    alignText: 'center',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  Text_2_SS_Instr_MainTrial = new visual.TextStim({
    win: psychoJS.window,
    name: 'Text_2_SS_Instr_MainTrial',
    alignText: 'center',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0.5, 0.15], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  Text_3_SS_Instr_MainTrial = new visual.TextStim({
    win: psychoJS.window,
    name: 'Text_3_SS_Instr_MainTrial',
    alignText: 'center',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -6.0 
  });
  
  Resp_SS_Instr_MainTrial = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "SS_Prac_CountDown"
  SS_Prac_CountDownClock = new util.Clock();
  Line_SS_Prac_CountDown = new visual.ShapeStim ({
    win: psychoJS.window, name: 'Line_SS_Prac_CountDown', units : 'height', 
    vertices: [[-[2, 0.5][0]/2.0, 0], [+[2, 0.5][0]/2.0, 0]],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  Text_SS_Prac_CountDown = new visual.TextStim({
    win: psychoJS.window,
    name: 'Text_SS_Prac_CountDown',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.2,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  Score_SS_Prac_CountDown = new visual.TextStim({
    win: psychoJS.window,
    name: 'Score_SS_Prac_CountDown',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0.7, 0], height: 0.2,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1.0,
    depth: -3.0 
  });
  
  // Initialize components for Routine "SS_Prac_PreTrial"
  SS_Prac_PreTrialClock = new util.Clock();
  ct = [];
  
  Line_SS_Prac_PreTrial = new visual.ShapeStim ({
    win: psychoJS.window, name: 'Line_SS_Prac_PreTrial', units : 'height', 
    vertices: [[-[2, 0.5][0]/2.0, 0], [+[2, 0.5][0]/2.0, 0]],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  Score_SS_Prac_PreTrial = new visual.TextStim({
    win: psychoJS.window,
    name: 'Score_SS_Prac_PreTrial',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0.7, 0], height: 0.2,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  Circle_SS_Prac_PreTrial = new visual.Polygon ({
    win: psychoJS.window, name: 'Circle_SS_Prac_PreTrial', units : 'height', 
    edges: 1000, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color(undefined),
    opacity: 1, depth: -3, interpolate: true,
  });
  
  Ball_SS_Prac_PreTrial = new visual.Polygon ({
    win: psychoJS.window, name: 'Ball_SS_Prac_PreTrial', units : 'height', 
    edges: 1000, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 0, lineColor: new util.Color(undefined),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -4, interpolate: true,
  });
  
  // Initialize components for Routine "SS_Prac_MainTrial"
  SS_Prac_MainTrialClock = new util.Clock();
  ball_opa = 1;
  press = [];
  
  Line_SS_Prac_MainTrial = new visual.ShapeStim ({
    win: psychoJS.window, name: 'Line_SS_Prac_MainTrial', units : 'height', 
    vertices: [[-[2, 0.5][0]/2.0, 0], [+[2, 0.5][0]/2.0, 0]],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  Score_SS_Prac_MainTrial = new visual.TextStim({
    win: psychoJS.window,
    name: 'Score_SS_Prac_MainTrial',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0.7, 0], height: 0.2,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  Ball_SS_Prac_MainTrial = new visual.Polygon ({
    win: psychoJS.window, name: 'Ball_SS_Prac_MainTrial', units : 'height', 
    edges: 1000, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 0, lineColor: new util.Color(undefined),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -3, interpolate: true,
  });
  
  Resp_SS_Prac_MainTrial = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "SS_Prac_PostTrial"
  SS_Prac_PostTrialClock = new util.Clock();
  Sound_SS_Prac_PostTrial = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: (- 1),
    });
  Sound_SS_Prac_PostTrial.setVolume(1.0);
  Line_SS_Prac_PostTrial = new visual.ShapeStim ({
    win: psychoJS.window, name: 'Line_SS_Prac_PostTrial', units : 'height', 
    vertices: [[-[2, 0.5][0]/2.0, 0], [+[2, 0.5][0]/2.0, 0]],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  Image_SS_Prac_PostTrial = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Image_SS_Prac_PostTrial', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.2, 0.2],
    color : new util.Color('white'), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  Score_SS_Prac_PostTrial = new visual.TextStim({
    win: psychoJS.window,
    name: 'Score_SS_Prac_PostTrial',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0.7, 0], height: 0.2,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  Ball_SS_Prac_PostTrial = new visual.Polygon ({
    win: psychoJS.window, name: 'Ball_SS_Prac_PostTrial', units : 'height', 
    edges: 1000, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 0, lineColor: new util.Color(undefined),
    fillColor: new util.Color(1.0),
    opacity: 1.0, depth: -4, interpolate: true,
  });
  
  // Initialize components for Routine "Instr_SS"
  Instr_SSClock = new util.Clock();
  Instr_SS_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instr_SS_Text',
    alignText: 'center',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  Instr_SS_Key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "SS_Instr_Load_Info"
  SS_Instr_Load_InfoClock = new util.Clock();
  // Initialize components for Routine "SS_Instr_PreTrial"
  SS_Instr_PreTrialClock = new util.Clock();
  Line_SS_Instr_PreTrial = new visual.ShapeStim ({
    win: psychoJS.window, name: 'Line_SS_Instr_PreTrial', units : 'height', 
    vertices: [[-[2, 0.5][0]/2.0, 0], [+[2, 0.5][0]/2.0, 0]],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  Circle_SS_Instr_PreTrial = new visual.Polygon ({
    win: psychoJS.window, name: 'Circle_SS_Instr_PreTrial', units : 'height', 
    edges: 1000, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color(undefined),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  Score_SS_Intr_PreTrial = new visual.TextStim({
    win: psychoJS.window,
    name: 'Score_SS_Intr_PreTrial',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0.7, 0], height: 0.2,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1.0,
    depth: -3.0 
  });
  
  Ball_SS_Instr_PreTrial = new visual.Polygon ({
    win: psychoJS.window, name: 'Ball_SS_Instr_PreTrial', units : 'height', 
    edges: 1000, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 0, lineColor: new util.Color(undefined),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -4, interpolate: true,
  });
  
  Text_1_SS_Instr_PreTrial = new visual.TextStim({
    win: psychoJS.window,
    name: 'Text_1_SS_Instr_PreTrial',
    alignText: 'center',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  Text_2_SS_Instr_PreTrial = new visual.TextStim({
    win: psychoJS.window,
    name: 'Text_2_SS_Instr_PreTrial',
    alignText: 'center',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0.5, 0.15], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -6.0 
  });
  
  Text_3_SS_Instr_PreTrial = new visual.TextStim({
    win: psychoJS.window,
    name: 'Text_3_SS_Instr_PreTrial',
    alignText: 'center',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -7.0 
  });
  
  Resp_SS_Instr_PreTrial = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "SS_Instr_MainTrial"
  SS_Instr_MainTrialClock = new util.Clock();
  Line_SS_Instr_MainTrial = new visual.ShapeStim ({
    win: psychoJS.window, name: 'Line_SS_Instr_MainTrial', units : 'height', 
    vertices: [[-[2, 0.5][0]/2.0, 0], [+[2, 0.5][0]/2.0, 0]],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  Score_SS_Instr_MainTrial = new visual.TextStim({
    win: psychoJS.window,
    name: 'Score_SS_Instr_MainTrial',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0.7, 0], height: 0.2,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1.0,
    depth: -2.0 
  });
  
  Ball_SS_Instr_MainTrial = new visual.Polygon ({
    win: psychoJS.window, name: 'Ball_SS_Instr_MainTrial', units : 'height', 
    edges: 1000, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 0, lineColor: new util.Color(undefined),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -3, interpolate: true,
  });
  
  Text_1_SS_Instr_MainTrial = new visual.TextStim({
    win: psychoJS.window,
    name: 'Text_1_SS_Instr_MainTrial',
    alignText: 'center',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  Text_2_SS_Instr_MainTrial = new visual.TextStim({
    win: psychoJS.window,
    name: 'Text_2_SS_Instr_MainTrial',
    alignText: 'center',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0.5, 0.15], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  Text_3_SS_Instr_MainTrial = new visual.TextStim({
    win: psychoJS.window,
    name: 'Text_3_SS_Instr_MainTrial',
    alignText: 'center',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -6.0 
  });
  
  Resp_SS_Instr_MainTrial = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Instr_Block_Num"
  Instr_Block_NumClock = new util.Clock();
  Text_Instr_Block_Num = new visual.TextStim({
    win: psychoJS.window,
    name: 'Text_Instr_Block_Num',
    alignHoriz: 'center',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  Resp_Instr_Block_Num = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "SS_CountDown"
  SS_CountDownClock = new util.Clock();
  Line_SS_CountDown = new visual.ShapeStim ({
    win: psychoJS.window, name: 'Line_SS_CountDown', units : 'height', 
    vertices: [[-[2, 0.5][0]/2.0, 0], [+[2, 0.5][0]/2.0, 0]],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  Text_SS_CountDown = new visual.TextStim({
    win: psychoJS.window,
    name: 'Text_SS_CountDown',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.2,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "SS_PreTrial"
  SS_PreTrialClock = new util.Clock();
  ct = [];
  
  Line_SS_PreTrial = new visual.ShapeStim ({
    win: psychoJS.window, name: 'Line_SS_PreTrial', units : 'height', 
    vertices: [[-[2, 0.5][0]/2.0, 0], [+[2, 0.5][0]/2.0, 0]],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  Circle_SS_PreTrial = new visual.Polygon ({
    win: psychoJS.window, name: 'Circle_SS_PreTrial', units : 'height', 
    edges: 1000, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color(undefined),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  Ball_SS_PreTrial = new visual.Polygon ({
    win: psychoJS.window, name: 'Ball_SS_PreTrial', units : 'height', 
    edges: 1000, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 0, lineColor: new util.Color(undefined),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -3, interpolate: true,
  });
  
  // Initialize components for Routine "SS_MainTrial"
  SS_MainTrialClock = new util.Clock();
  ball_opa = 1;
  press = [];
  
  Line_SS_MainTrial = new visual.ShapeStim ({
    win: psychoJS.window, name: 'Line_SS_MainTrial', units : 'height', 
    vertices: [[-[2, 0.5][0]/2.0, 0], [+[2, 0.5][0]/2.0, 0]],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  Ball_SS_MainTrial = new visual.Polygon ({
    win: psychoJS.window, name: 'Ball_SS_MainTrial', units : 'height', 
    edges: 1000, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 0, lineColor: new util.Color(undefined),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  Resp_SS_MainTrial = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "SS_PostTrial"
  SS_PostTrialClock = new util.Clock();
  Sound_SS_PostTrial = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: (- 1),
    });
  Sound_SS_PostTrial.setVolume(1.0);
  Line_SS_PostTrial = new visual.ShapeStim ({
    win: psychoJS.window, name: 'Line_SS_PostTrial', units : 'height', 
    vertices: [[-[2, 0.5][0]/2.0, 0], [+[2, 0.5][0]/2.0, 0]],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  Image_SS_PostTrial = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Image_SS_PostTrial', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.2, 0.2],
    color : new util.Color('white'), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  Ball_SS_PostTrial = new visual.Polygon ({
    win: psychoJS.window, name: 'Ball_SS_PostTrial', units : 'height', 
    edges: 1000, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 0, lineColor: new util.Color(undefined),
    fillColor: new util.Color(1.0),
    opacity: 1.0, depth: -3, interpolate: true,
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var Import;
var currentLoop;
function ImportLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  Import = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, 'conditions.xlsx', '0:2'),
    seed: undefined, name: 'Import'
  });
  psychoJS.experiment.addLoop(Import); // add the loop to the experiment
  currentLoop = Import;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisImport of Import) {
    const snapshot = Import.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(InitiationRoutineBegin(snapshot));
    thisScheduler.add(InitiationRoutineEachFrame(snapshot));
    thisScheduler.add(InitiationRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function ImportLoopEnd() {
  psychoJS.experiment.removeLoop(Import);

  return Scheduler.Event.NEXT;
}


var SS_Prac_Block_Loop;
function SS_Prac_Block_LoopLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  SS_Prac_Block_Loop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: num_block_prac, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'SS_Prac_Block_Loop'
  });
  psychoJS.experiment.addLoop(SS_Prac_Block_Loop); // add the loop to the experiment
  currentLoop = SS_Prac_Block_Loop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisSS_Prac_Block_Loop of SS_Prac_Block_Loop) {
    const snapshot = SS_Prac_Block_Loop.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(SS_Prac_Instr_Load_InfoRoutineBegin(snapshot));
    thisScheduler.add(SS_Prac_Instr_Load_InfoRoutineEachFrame(snapshot));
    thisScheduler.add(SS_Prac_Instr_Load_InfoRoutineEnd(snapshot));
    const SS_Prac_Instr_LoopLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(SS_Prac_Instr_LoopLoopBegin, SS_Prac_Instr_LoopLoopScheduler);
    thisScheduler.add(SS_Prac_Instr_LoopLoopScheduler);
    thisScheduler.add(SS_Prac_Instr_LoopLoopEnd);
    thisScheduler.add(SS_Prac_CountDownRoutineBegin(snapshot));
    thisScheduler.add(SS_Prac_CountDownRoutineEachFrame(snapshot));
    thisScheduler.add(SS_Prac_CountDownRoutineEnd(snapshot));
    const SS_Prac_Trial_LoopLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(SS_Prac_Trial_LoopLoopBegin, SS_Prac_Trial_LoopLoopScheduler);
    thisScheduler.add(SS_Prac_Trial_LoopLoopScheduler);
    thisScheduler.add(SS_Prac_Trial_LoopLoopEnd);
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var SS_Prac_Instr_Loop;
function SS_Prac_Instr_LoopLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  SS_Prac_Instr_Loop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1000, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'SS_Prac_Instr_Loop'
  });
  psychoJS.experiment.addLoop(SS_Prac_Instr_Loop); // add the loop to the experiment
  currentLoop = SS_Prac_Instr_Loop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisSS_Prac_Instr_Loop of SS_Prac_Instr_Loop) {
    const snapshot = SS_Prac_Instr_Loop.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(SS_Instr_PreTrialRoutineBegin(snapshot));
    thisScheduler.add(SS_Instr_PreTrialRoutineEachFrame(snapshot));
    thisScheduler.add(SS_Instr_PreTrialRoutineEnd(snapshot));
    thisScheduler.add(SS_Instr_MainTrialRoutineBegin(snapshot));
    thisScheduler.add(SS_Instr_MainTrialRoutineEachFrame(snapshot));
    thisScheduler.add(SS_Instr_MainTrialRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function SS_Prac_Instr_LoopLoopEnd() {
  psychoJS.experiment.removeLoop(SS_Prac_Instr_Loop);

  return Scheduler.Event.NEXT;
}


var SS_Prac_Trial_Loop;
function SS_Prac_Trial_LoopLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  SS_Prac_Trial_Loop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: num_trial_prac, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'SS_Prac_Trial_Loop'
  });
  psychoJS.experiment.addLoop(SS_Prac_Trial_Loop); // add the loop to the experiment
  currentLoop = SS_Prac_Trial_Loop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisSS_Prac_Trial_Loop of SS_Prac_Trial_Loop) {
    const snapshot = SS_Prac_Trial_Loop.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(SS_Prac_PreTrialRoutineBegin(snapshot));
    thisScheduler.add(SS_Prac_PreTrialRoutineEachFrame(snapshot));
    thisScheduler.add(SS_Prac_PreTrialRoutineEnd(snapshot));
    thisScheduler.add(SS_Prac_MainTrialRoutineBegin(snapshot));
    thisScheduler.add(SS_Prac_MainTrialRoutineEachFrame(snapshot));
    thisScheduler.add(SS_Prac_MainTrialRoutineEnd(snapshot));
    thisScheduler.add(SS_Prac_PostTrialRoutineBegin(snapshot));
    thisScheduler.add(SS_Prac_PostTrialRoutineEachFrame(snapshot));
    thisScheduler.add(SS_Prac_PostTrialRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function SS_Prac_Trial_LoopLoopEnd() {
  psychoJS.experiment.removeLoop(SS_Prac_Trial_Loop);

  return Scheduler.Event.NEXT;
}


function SS_Prac_Block_LoopLoopEnd() {
  psychoJS.experiment.removeLoop(SS_Prac_Block_Loop);

  return Scheduler.Event.NEXT;
}


var SS_Block_Loop;
function SS_Block_LoopLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  SS_Block_Loop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: num_block, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'SS_Block_Loop'
  });
  psychoJS.experiment.addLoop(SS_Block_Loop); // add the loop to the experiment
  currentLoop = SS_Block_Loop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisSS_Block_Loop of SS_Block_Loop) {
    const snapshot = SS_Block_Loop.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(SS_Instr_Load_InfoRoutineBegin(snapshot));
    thisScheduler.add(SS_Instr_Load_InfoRoutineEachFrame(snapshot));
    thisScheduler.add(SS_Instr_Load_InfoRoutineEnd(snapshot));
    const Show_Instr_BoolLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(Show_Instr_BoolLoopBegin, Show_Instr_BoolLoopScheduler);
    thisScheduler.add(Show_Instr_BoolLoopScheduler);
    thisScheduler.add(Show_Instr_BoolLoopEnd);
    thisScheduler.add(Instr_Block_NumRoutineBegin(snapshot));
    thisScheduler.add(Instr_Block_NumRoutineEachFrame(snapshot));
    thisScheduler.add(Instr_Block_NumRoutineEnd(snapshot));
    thisScheduler.add(SS_CountDownRoutineBegin(snapshot));
    thisScheduler.add(SS_CountDownRoutineEachFrame(snapshot));
    thisScheduler.add(SS_CountDownRoutineEnd(snapshot));
    const SS_Trial_LoopLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(SS_Trial_LoopLoopBegin, SS_Trial_LoopLoopScheduler);
    thisScheduler.add(SS_Trial_LoopLoopScheduler);
    thisScheduler.add(SS_Trial_LoopLoopEnd);
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var Show_Instr_Bool;
function Show_Instr_BoolLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  Show_Instr_Bool = new TrialHandler({
    psychoJS: psychoJS,
    nReps: show_instr, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'Show_Instr_Bool'
  });
  psychoJS.experiment.addLoop(Show_Instr_Bool); // add the loop to the experiment
  currentLoop = Show_Instr_Bool;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisShow_Instr_Bool of Show_Instr_Bool) {
    const snapshot = Show_Instr_Bool.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    const SS_Instr_LoopLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(SS_Instr_LoopLoopBegin, SS_Instr_LoopLoopScheduler);
    thisScheduler.add(SS_Instr_LoopLoopScheduler);
    thisScheduler.add(SS_Instr_LoopLoopEnd);
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var SS_Instr_Loop;
function SS_Instr_LoopLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  SS_Instr_Loop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1000, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'SS_Instr_Loop'
  });
  psychoJS.experiment.addLoop(SS_Instr_Loop); // add the loop to the experiment
  currentLoop = SS_Instr_Loop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisSS_Instr_Loop of SS_Instr_Loop) {
    const snapshot = SS_Instr_Loop.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(SS_Instr_PreTrialRoutineBegin(snapshot));
    thisScheduler.add(SS_Instr_PreTrialRoutineEachFrame(snapshot));
    thisScheduler.add(SS_Instr_PreTrialRoutineEnd(snapshot));
    thisScheduler.add(SS_Instr_MainTrialRoutineBegin(snapshot));
    thisScheduler.add(SS_Instr_MainTrialRoutineEachFrame(snapshot));
    thisScheduler.add(SS_Instr_MainTrialRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function SS_Instr_LoopLoopEnd() {
  psychoJS.experiment.removeLoop(SS_Instr_Loop);

  return Scheduler.Event.NEXT;
}


function Show_Instr_BoolLoopEnd() {
  psychoJS.experiment.removeLoop(Show_Instr_Bool);

  return Scheduler.Event.NEXT;
}


var SS_Trial_Loop;
function SS_Trial_LoopLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  SS_Trial_Loop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: num_trial, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'SS_Trial_Loop'
  });
  psychoJS.experiment.addLoop(SS_Trial_Loop); // add the loop to the experiment
  currentLoop = SS_Trial_Loop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisSS_Trial_Loop of SS_Trial_Loop) {
    const snapshot = SS_Trial_Loop.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(SS_PreTrialRoutineBegin(snapshot));
    thisScheduler.add(SS_PreTrialRoutineEachFrame(snapshot));
    thisScheduler.add(SS_PreTrialRoutineEnd(snapshot));
    thisScheduler.add(SS_MainTrialRoutineBegin(snapshot));
    thisScheduler.add(SS_MainTrialRoutineEachFrame(snapshot));
    thisScheduler.add(SS_MainTrialRoutineEnd(snapshot));
    thisScheduler.add(SS_PostTrialRoutineBegin(snapshot));
    thisScheduler.add(SS_PostTrialRoutineEachFrame(snapshot));
    thisScheduler.add(SS_PostTrialRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function SS_Trial_LoopLoopEnd() {
  psychoJS.experiment.removeLoop(SS_Trial_Loop);

  return Scheduler.Event.NEXT;
}


function SS_Block_LoopLoopEnd() {
  psychoJS.experiment.removeLoop(SS_Block_Loop);

  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var check;
var cross;
var coin;
var buzz;
var InitiationComponents;
function InitiationRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Initiation'-------
    t = 0;
    InitiationClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    StimList = Import.trialList;
    check = StimList[0]["Check"];
    cross = StimList[0]["Cross"];
    coin = StimList[0]["Sound_P"];
    buzz = StimList[0]["Sound_N"];
    
    // keep track of which components have finished
    InitiationComponents = [];
    
    for (const thisComponent of InitiationComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var continueRoutine;
function InitiationRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Initiation'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = InitiationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of InitiationComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var instr_exp_text;
var instr_ss_text;
function InitiationRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Initiation'-------
    for (const thisComponent of InitiationComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    instr_exp_text = `Thank you for participating in our study!
    
    This study will take about 30 minutes. Once you start, you cannot turn off your web browser until you complete the study.
    
    On next page, please carefully read this instruction.
    
    If you are ready, press (space) to continue.`
    ;
    instr_ss_text = `Great job!
    
    Now we are about to start the main task.
    
    There will be 12 rounds and you can take a rest between rounds.
    
    On next page, read the instruction carefully.
    
    If you are ready, press (space) to continue.`
    ;
    
    // the Routine "Initiation" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _Instr_Exp_Key_allKeys;
var Instr_ExpComponents;
function Instr_ExpRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Instr_Exp'-------
    t = 0;
    Instr_ExpClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    Instr_Exp_Text.setText(instr_exp_text);
    Instr_Exp_Key.keys = undefined;
    Instr_Exp_Key.rt = undefined;
    _Instr_Exp_Key_allKeys = [];
    // keep track of which components have finished
    Instr_ExpComponents = [];
    Instr_ExpComponents.push(Instr_Exp_Text);
    Instr_ExpComponents.push(Instr_Exp_Key);
    
    for (const thisComponent of Instr_ExpComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Instr_ExpRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Instr_Exp'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Instr_ExpClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instr_Exp_Text* updates
    if (t >= 0.0 && Instr_Exp_Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr_Exp_Text.tStart = t;  // (not accounting for frame time here)
      Instr_Exp_Text.frameNStart = frameN;  // exact frame index
      
      Instr_Exp_Text.setAutoDraw(true);
    }

    
    // *Instr_Exp_Key* updates
    if (t >= 0.0 && Instr_Exp_Key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr_Exp_Key.tStart = t;  // (not accounting for frame time here)
      Instr_Exp_Key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Instr_Exp_Key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Instr_Exp_Key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Instr_Exp_Key.clearEvents(); });
    }

    if (Instr_Exp_Key.status === PsychoJS.Status.STARTED) {
      let theseKeys = Instr_Exp_Key.getKeys({keyList: ['space'], waitRelease: false});
      _Instr_Exp_Key_allKeys = _Instr_Exp_Key_allKeys.concat(theseKeys);
      if (_Instr_Exp_Key_allKeys.length > 0) {
        Instr_Exp_Key.keys = _Instr_Exp_Key_allKeys[0].name;  // just the first key pressed
        Instr_Exp_Key.rt = _Instr_Exp_Key_allKeys[0].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instr_ExpComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instr_ExpRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Instr_Exp'-------
    for (const thisComponent of Instr_ExpComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Instr_Exp_Key.keys', Instr_Exp_Key.keys);
    if (typeof Instr_Exp_Key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Instr_Exp_Key.rt', Instr_Exp_Key.rt);
        routineTimer.reset();
        }
    
    Instr_Exp_Key.stop();
    // the Routine "Instr_Exp" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var prac;
var countdown;
var corr_score;
var score_color;
var score_opa;
var trial_count;
var trial_count_instr;
var default_color;
var dt;
var text1;
var text2;
var text3;
var ss_instr_text1;
var ss_instr_text2;
var ss_instr_text3;
var SS_Prac_Instr_Load_InfoComponents;
function SS_Prac_Instr_Load_InfoRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'SS_Prac_Instr_Load_Info'-------
    t = 0;
    SS_Prac_Instr_Load_InfoClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    if ((block_count === 1)) {
        timing_tol = 0.045;
    } else {
        timing_tol = 0.03;
    }
    $min = (speed * (t_max - timing_tol));
    $max = (speed * (t_max + timing_tol));
    size_ball = ($max - $min);
    prac = 1;
    countdown = 3;
    corr_score = 0;
    score_color = [(- 1), 1, (- 1)];
    score_opa = 1;
    trial_count = 0;
    trial_count_instr = 0;
    default_color = go_color;
    ct = 99;
    dt = (t_max - ct);
    text1 = ``;
    text2 = ``;
    text3 = ``;
    if ((block_count === 1)) {
        ss_instr_text1 = `In the upcoming block,
    press (j) when the ball overlaps the white line`
    ;
    } else {
        if ((block_count === 2)) {
            ss_instr_text1 = `Now the ball becomes smaller,
    still press (j) when it overlaps the white line`
    ;
        }
    }
    ss_instr_text2 = `Your job is to get 4 straght hits`;
    ss_instr_text3 = `Whenever you are ready, press (j) to start the task`;
    
    // keep track of which components have finished
    SS_Prac_Instr_Load_InfoComponents = [];
    
    for (const thisComponent of SS_Prac_Instr_Load_InfoComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function SS_Prac_Instr_Load_InfoRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'SS_Prac_Instr_Load_Info'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = SS_Prac_Instr_Load_InfoClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of SS_Prac_Instr_Load_InfoComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function SS_Prac_Instr_Load_InfoRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'SS_Prac_Instr_Load_Info'-------
    for (const thisComponent of SS_Prac_Instr_Load_InfoComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "SS_Prac_Instr_Load_Info" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var ball_color;
var _Resp_SS_Instr_PreTrial_allKeys;
var SS_Instr_PreTrialComponents;
function SS_Instr_PreTrialRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'SS_Instr_PreTrial'-------
    t = 0;
    SS_Instr_PreTrialClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    routineTimer.reset(0);
    if ((prac === 0)) {
        if ((trial_count_instr >= 1)) {
            text2 = ss_instr_text2;
        }
        if ((trial_count_instr >= 5)) {
            text1 = ss_instr_text1;
        }
        if (((6 <= trial_count_instr) && (trial_count_instr <= 9))) {
            corr_score = (corr_score + 1);
        }
        if ((trial_count_instr >= 10)) {
            text3 = ss_instr_text3;
        }
    } else {
        if ((trial_count_instr >= 1)) {
            text1 = ss_instr_text1;
        }
        if ((trial_count_instr >= 5)) {
            text2 = ss_instr_text2;
        }
        if (((6 <= trial_count_instr) && (trial_count_instr <= 9))) {
            corr_score = (corr_score + 1);
        }
        if ((trial_count_instr >= 10)) {
            text3 = ss_instr_text3;
        }
    }
    if ((prac === 1)) {
        ct = 99;
        dt = (t_max - ct);
    } else {
        sample_ind = dt_ind[trial_count_instr];
        dt = ((MATH.random() * (dt_interval[sample_ind][1] - dt_interval[sample_ind][0])) + dt_interval[sample_ind][0]);
        ct = (t_max - dt);
    }
    ball_color = default_color;
    
    Line_SS_Instr_PreTrial.setPos([0, y_line]);
    Line_SS_Instr_PreTrial.setFillColor(new util.Color(line_col));
    Line_SS_Instr_PreTrial.setLineColor(new util.Color(line_col));
    Line_SS_Instr_PreTrial.setLineWidth(line_wd);
    Circle_SS_Instr_PreTrial.setPos([0, y_ball]);
    Circle_SS_Instr_PreTrial.setSize([size_ball, size_ball]);
    Circle_SS_Instr_PreTrial.setLineColor(new util.Color(ball_color));
    Circle_SS_Instr_PreTrial.setLineWidth(ball_wd);
    Score_SS_Intr_PreTrial.setColor(new util.Color(score_color));
    Score_SS_Intr_PreTrial.setOpacity(score_opa);
    Score_SS_Intr_PreTrial.setText(corr_score);
    Ball_SS_Instr_PreTrial.setPos([0, y_ball]);
    Ball_SS_Instr_PreTrial.setFillColor(new util.Color(ball_color));
    Text_1_SS_Instr_PreTrial.setPos([(- 0.3), (y_line + 0.05)]);
    Text_1_SS_Instr_PreTrial.setText(text1);
    Text_2_SS_Instr_PreTrial.setText(text2);
    Text_3_SS_Instr_PreTrial.setText(text3);
    Resp_SS_Instr_PreTrial.keys = undefined;
    Resp_SS_Instr_PreTrial.rt = undefined;
    _Resp_SS_Instr_PreTrial_allKeys = [];
    // keep track of which components have finished
    SS_Instr_PreTrialComponents = [];
    SS_Instr_PreTrialComponents.push(Line_SS_Instr_PreTrial);
    SS_Instr_PreTrialComponents.push(Circle_SS_Instr_PreTrial);
    SS_Instr_PreTrialComponents.push(Score_SS_Intr_PreTrial);
    SS_Instr_PreTrialComponents.push(Ball_SS_Instr_PreTrial);
    SS_Instr_PreTrialComponents.push(Text_1_SS_Instr_PreTrial);
    SS_Instr_PreTrialComponents.push(Text_2_SS_Instr_PreTrial);
    SS_Instr_PreTrialComponents.push(Text_3_SS_Instr_PreTrial);
    SS_Instr_PreTrialComponents.push(Resp_SS_Instr_PreTrial);
    
    for (const thisComponent of SS_Instr_PreTrialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var frameRemains;
function SS_Instr_PreTrialRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'SS_Instr_PreTrial'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = SS_Instr_PreTrialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    size_ball_pretrial = (0 - ((size_ball / t_pretrial) * routineTimer.getTime()));
    if (((trial_count_instr >= 11) && (Resp_SS_Instr_PreTrial.keys !== undefined))) {
      trials.finished =  true;
    }
    
    
    // *Line_SS_Instr_PreTrial* updates
    if (t >= 0.0 && Line_SS_Instr_PreTrial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Line_SS_Instr_PreTrial.tStart = t;  // (not accounting for frame time here)
      Line_SS_Instr_PreTrial.frameNStart = frameN;  // exact frame index
      
      Line_SS_Instr_PreTrial.setAutoDraw(true);
    }

    frameRemains = t_pretrial  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Line_SS_Instr_PreTrial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Line_SS_Instr_PreTrial.setAutoDraw(false);
    }
    
    // *Circle_SS_Instr_PreTrial* updates
    if (t >= 0.0 && Circle_SS_Instr_PreTrial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Circle_SS_Instr_PreTrial.tStart = t;  // (not accounting for frame time here)
      Circle_SS_Instr_PreTrial.frameNStart = frameN;  // exact frame index
      
      Circle_SS_Instr_PreTrial.setAutoDraw(true);
    }

    frameRemains = t_pretrial  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Circle_SS_Instr_PreTrial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Circle_SS_Instr_PreTrial.setAutoDraw(false);
    }
    
    // *Score_SS_Intr_PreTrial* updates
    if (t >= 0.0 && Score_SS_Intr_PreTrial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Score_SS_Intr_PreTrial.tStart = t;  // (not accounting for frame time here)
      Score_SS_Intr_PreTrial.frameNStart = frameN;  // exact frame index
      
      Score_SS_Intr_PreTrial.setAutoDraw(true);
    }

    frameRemains = t_pretrial  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Score_SS_Intr_PreTrial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Score_SS_Intr_PreTrial.setAutoDraw(false);
    }
    
    // *Ball_SS_Instr_PreTrial* updates
    if (t >= 0.0 && Ball_SS_Instr_PreTrial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Ball_SS_Instr_PreTrial.tStart = t;  // (not accounting for frame time here)
      Ball_SS_Instr_PreTrial.frameNStart = frameN;  // exact frame index
      
      Ball_SS_Instr_PreTrial.setAutoDraw(true);
    }

    frameRemains = t_pretrial  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Ball_SS_Instr_PreTrial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Ball_SS_Instr_PreTrial.setAutoDraw(false);
    }
    
    if (Ball_SS_Instr_PreTrial.status === PsychoJS.Status.STARTED){ // only update if being drawn
      Ball_SS_Instr_PreTrial.setSize([size_ball_pretrial, size_ball_pretrial]);
    }
    
    // *Text_1_SS_Instr_PreTrial* updates
    if (t >= 0.0 && Text_1_SS_Instr_PreTrial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Text_1_SS_Instr_PreTrial.tStart = t;  // (not accounting for frame time here)
      Text_1_SS_Instr_PreTrial.frameNStart = frameN;  // exact frame index
      
      Text_1_SS_Instr_PreTrial.setAutoDraw(true);
    }

    frameRemains = t_pretrial  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Text_1_SS_Instr_PreTrial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Text_1_SS_Instr_PreTrial.setAutoDraw(false);
    }
    
    // *Text_2_SS_Instr_PreTrial* updates
    if (t >= 0.0 && Text_2_SS_Instr_PreTrial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Text_2_SS_Instr_PreTrial.tStart = t;  // (not accounting for frame time here)
      Text_2_SS_Instr_PreTrial.frameNStart = frameN;  // exact frame index
      
      Text_2_SS_Instr_PreTrial.setAutoDraw(true);
    }

    frameRemains = t_pretrial  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Text_2_SS_Instr_PreTrial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Text_2_SS_Instr_PreTrial.setAutoDraw(false);
    }
    
    // *Text_3_SS_Instr_PreTrial* updates
    if (t >= 0.0 && Text_3_SS_Instr_PreTrial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Text_3_SS_Instr_PreTrial.tStart = t;  // (not accounting for frame time here)
      Text_3_SS_Instr_PreTrial.frameNStart = frameN;  // exact frame index
      
      Text_3_SS_Instr_PreTrial.setAutoDraw(true);
    }

    frameRemains = t_pretrial  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Text_3_SS_Instr_PreTrial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Text_3_SS_Instr_PreTrial.setAutoDraw(false);
    }
    
    // *Resp_SS_Instr_PreTrial* updates
    if (t >= 0.0 && Resp_SS_Instr_PreTrial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Resp_SS_Instr_PreTrial.tStart = t;  // (not accounting for frame time here)
      Resp_SS_Instr_PreTrial.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Resp_SS_Instr_PreTrial.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Resp_SS_Instr_PreTrial.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Resp_SS_Instr_PreTrial.clearEvents(); });
    }

    frameRemains = t_pretrial  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Resp_SS_Instr_PreTrial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Resp_SS_Instr_PreTrial.status = PsychoJS.Status.FINISHED;
  }

    if (Resp_SS_Instr_PreTrial.status === PsychoJS.Status.STARTED) {
      let theseKeys = Resp_SS_Instr_PreTrial.getKeys({keyList: ['j'], waitRelease: false});
      _Resp_SS_Instr_PreTrial_allKeys = _Resp_SS_Instr_PreTrial_allKeys.concat(theseKeys);
      if (_Resp_SS_Instr_PreTrial_allKeys.length > 0) {
        Resp_SS_Instr_PreTrial.keys = _Resp_SS_Instr_PreTrial_allKeys[0].name;  // just the first key pressed
        Resp_SS_Instr_PreTrial.rt = _Resp_SS_Instr_PreTrial_allKeys[0].rt;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of SS_Instr_PreTrialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function SS_Instr_PreTrialRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'SS_Instr_PreTrial'-------
    for (const thisComponent of SS_Instr_PreTrialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Resp_SS_Instr_PreTrial.keys', Resp_SS_Instr_PreTrial.keys);
    if (typeof Resp_SS_Instr_PreTrial.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Resp_SS_Instr_PreTrial.rt', Resp_SS_Instr_PreTrial.rt);
        }
    
    Resp_SS_Instr_PreTrial.stop();
    // the Routine "SS_Instr_PreTrial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _Resp_SS_Instr_MainTrial_allKeys;
var SS_Instr_MainTrialComponents;
function SS_Instr_MainTrialRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'SS_Instr_MainTrial'-------
    t = 0;
    SS_Instr_MainTrialClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    routineTimer.reset(t_max);
    
    Line_SS_Instr_MainTrial.setPos([0, y_line]);
    Line_SS_Instr_MainTrial.setFillColor(new util.Color(line_col));
    Line_SS_Instr_MainTrial.setLineColor(new util.Color(line_col));
    Line_SS_Instr_MainTrial.setLineWidth(line_wd);
    Score_SS_Instr_MainTrial.setColor(new util.Color(score_color));
    Score_SS_Instr_MainTrial.setOpacity(score_opa);
    Score_SS_Instr_MainTrial.setText(corr_score);
    Ball_SS_Instr_MainTrial.setSize([size_ball, size_ball]);
    Text_1_SS_Instr_MainTrial.setPos([(- 0.3), (y_line + 0.05)]);
    Text_1_SS_Instr_MainTrial.setText(text1);
    Text_2_SS_Instr_MainTrial.setText(text2);
    Text_3_SS_Instr_MainTrial.setText(text3);
    Resp_SS_Instr_MainTrial.keys = undefined;
    Resp_SS_Instr_MainTrial.rt = undefined;
    _Resp_SS_Instr_MainTrial_allKeys = [];
    // keep track of which components have finished
    SS_Instr_MainTrialComponents = [];
    SS_Instr_MainTrialComponents.push(Line_SS_Instr_MainTrial);
    SS_Instr_MainTrialComponents.push(Score_SS_Instr_MainTrial);
    SS_Instr_MainTrialComponents.push(Ball_SS_Instr_MainTrial);
    SS_Instr_MainTrialComponents.push(Text_1_SS_Instr_MainTrial);
    SS_Instr_MainTrialComponents.push(Text_2_SS_Instr_MainTrial);
    SS_Instr_MainTrialComponents.push(Text_3_SS_Instr_MainTrial);
    SS_Instr_MainTrialComponents.push(Resp_SS_Instr_MainTrial);
    
    for (const thisComponent of SS_Instr_MainTrialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function SS_Instr_MainTrialRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'SS_Instr_MainTrial'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = SS_Instr_MainTrialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    y_ball_maintrial = (y_ball - (speed * (t_max - routineTimer.getTime())));
    if (((t_max - routineTimer.getTime()) < ct)) {
        ball_color = default_color;
    } else {
        ball_color = change_color;
    }
    if (((trial_count_instr >= 11) && (Resp_SS_Instr_MainTrial.keys.length !== 0))) {
      trials.finished =  true;
    }
    
    
    // *Line_SS_Instr_MainTrial* updates
    if (t >= 0.0 && Line_SS_Instr_MainTrial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Line_SS_Instr_MainTrial.tStart = t;  // (not accounting for frame time here)
      Line_SS_Instr_MainTrial.frameNStart = frameN;  // exact frame index
      
      Line_SS_Instr_MainTrial.setAutoDraw(true);
    }

    frameRemains = dur_trial  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Line_SS_Instr_MainTrial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Line_SS_Instr_MainTrial.setAutoDraw(false);
    }
    
    // *Score_SS_Instr_MainTrial* updates
    if (t >= 0.0 && Score_SS_Instr_MainTrial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Score_SS_Instr_MainTrial.tStart = t;  // (not accounting for frame time here)
      Score_SS_Instr_MainTrial.frameNStart = frameN;  // exact frame index
      
      Score_SS_Instr_MainTrial.setAutoDraw(true);
    }

    frameRemains = dur_trial  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Score_SS_Instr_MainTrial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Score_SS_Instr_MainTrial.setAutoDraw(false);
    }
    
    // *Ball_SS_Instr_MainTrial* updates
    if (t >= 0.0 && Ball_SS_Instr_MainTrial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Ball_SS_Instr_MainTrial.tStart = t;  // (not accounting for frame time here)
      Ball_SS_Instr_MainTrial.frameNStart = frameN;  // exact frame index
      
      Ball_SS_Instr_MainTrial.setAutoDraw(true);
    }

    frameRemains = dur_trial  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Ball_SS_Instr_MainTrial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Ball_SS_Instr_MainTrial.setAutoDraw(false);
    }
    
    if (Ball_SS_Instr_MainTrial.status === PsychoJS.Status.STARTED){ // only update if being drawn
      Ball_SS_Instr_MainTrial.setPos([0, y_ball_maintrial]);
      Ball_SS_Instr_MainTrial.setFillColor(new util.Color(ball_color));
    }
    
    // *Text_1_SS_Instr_MainTrial* updates
    if (t >= 0.0 && Text_1_SS_Instr_MainTrial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Text_1_SS_Instr_MainTrial.tStart = t;  // (not accounting for frame time here)
      Text_1_SS_Instr_MainTrial.frameNStart = frameN;  // exact frame index
      
      Text_1_SS_Instr_MainTrial.setAutoDraw(true);
    }

    frameRemains = dur_trial  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Text_1_SS_Instr_MainTrial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Text_1_SS_Instr_MainTrial.setAutoDraw(false);
    }
    
    // *Text_2_SS_Instr_MainTrial* updates
    if (t >= 0.0 && Text_2_SS_Instr_MainTrial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Text_2_SS_Instr_MainTrial.tStart = t;  // (not accounting for frame time here)
      Text_2_SS_Instr_MainTrial.frameNStart = frameN;  // exact frame index
      
      Text_2_SS_Instr_MainTrial.setAutoDraw(true);
    }

    frameRemains = dur_trial  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Text_2_SS_Instr_MainTrial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Text_2_SS_Instr_MainTrial.setAutoDraw(false);
    }
    
    // *Text_3_SS_Instr_MainTrial* updates
    if (t >= 0.0 && Text_3_SS_Instr_MainTrial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Text_3_SS_Instr_MainTrial.tStart = t;  // (not accounting for frame time here)
      Text_3_SS_Instr_MainTrial.frameNStart = frameN;  // exact frame index
      
      Text_3_SS_Instr_MainTrial.setAutoDraw(true);
    }

    frameRemains = dur_trial  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Text_3_SS_Instr_MainTrial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Text_3_SS_Instr_MainTrial.setAutoDraw(false);
    }
    
    // *Resp_SS_Instr_MainTrial* updates
    if (t >= 0.0 && Resp_SS_Instr_MainTrial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Resp_SS_Instr_MainTrial.tStart = t;  // (not accounting for frame time here)
      Resp_SS_Instr_MainTrial.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Resp_SS_Instr_MainTrial.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Resp_SS_Instr_MainTrial.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Resp_SS_Instr_MainTrial.clearEvents(); });
    }

    frameRemains = dur_trial  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Resp_SS_Instr_MainTrial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Resp_SS_Instr_MainTrial.status = PsychoJS.Status.FINISHED;
  }

    if (Resp_SS_Instr_MainTrial.status === PsychoJS.Status.STARTED) {
      let theseKeys = Resp_SS_Instr_MainTrial.getKeys({keyList: ['j'], waitRelease: false});
      _Resp_SS_Instr_MainTrial_allKeys = _Resp_SS_Instr_MainTrial_allKeys.concat(theseKeys);
      if (_Resp_SS_Instr_MainTrial_allKeys.length > 0) {
        Resp_SS_Instr_MainTrial.keys = _Resp_SS_Instr_MainTrial_allKeys[0].name;  // just the first key pressed
        Resp_SS_Instr_MainTrial.rt = _Resp_SS_Instr_MainTrial_allKeys[0].rt;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of SS_Instr_MainTrialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function SS_Instr_MainTrialRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'SS_Instr_MainTrial'-------
    for (const thisComponent of SS_Instr_MainTrialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    trial_count_instr = (trial_count_instr + 1);
    
    psychoJS.experiment.addData('Resp_SS_Instr_MainTrial.keys', Resp_SS_Instr_MainTrial.keys);
    if (typeof Resp_SS_Instr_MainTrial.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Resp_SS_Instr_MainTrial.rt', Resp_SS_Instr_MainTrial.rt);
        }
    
    Resp_SS_Instr_MainTrial.stop();
    // the Routine "SS_Instr_MainTrial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var SS_Prac_CountDownComponents;
function SS_Prac_CountDownRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'SS_Prac_CountDown'-------
    t = 0;
    SS_Prac_CountDownClock.reset(); // clock
    frameN = -1;
    routineTimer.add(3.000000);
    // update component parameters for each repeat
    routineTimer.reset(3);
    corr_score = 0;
    
    Line_SS_Prac_CountDown.setPos([0, y_line]);
    Line_SS_Prac_CountDown.setFillColor(new util.Color(line_col));
    Line_SS_Prac_CountDown.setLineColor(new util.Color(line_col));
    Line_SS_Prac_CountDown.setLineWidth(line_wd);
    Score_SS_Prac_CountDown.setColor(new util.Color(score_color));
    Score_SS_Prac_CountDown.setOpacity(score_opa);
    Score_SS_Prac_CountDown.setText(corr_score);
    // keep track of which components have finished
    SS_Prac_CountDownComponents = [];
    SS_Prac_CountDownComponents.push(Line_SS_Prac_CountDown);
    SS_Prac_CountDownComponents.push(Text_SS_Prac_CountDown);
    SS_Prac_CountDownComponents.push(Score_SS_Prac_CountDown);
    
    for (const thisComponent of SS_Prac_CountDownComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function SS_Prac_CountDownRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'SS_Prac_CountDown'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = SS_Prac_CountDownClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if (((1 <= routineTimer.getTime()) && (routineTimer.getTime() < 2))) {
        countdown = 2;
    } else {
        if ((routineTimer.getTime() < 1)) {
            countdown = 1;
        }
    }
    
    
    // *Line_SS_Prac_CountDown* updates
    if (t >= 0.0 && Line_SS_Prac_CountDown.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Line_SS_Prac_CountDown.tStart = t;  // (not accounting for frame time here)
      Line_SS_Prac_CountDown.frameNStart = frameN;  // exact frame index
      
      Line_SS_Prac_CountDown.setAutoDraw(true);
    }

    frameRemains = 3  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Line_SS_Prac_CountDown.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Line_SS_Prac_CountDown.setAutoDraw(false);
    }
    
    // *Text_SS_Prac_CountDown* updates
    if (t >= 0.0 && Text_SS_Prac_CountDown.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Text_SS_Prac_CountDown.tStart = t;  // (not accounting for frame time here)
      Text_SS_Prac_CountDown.frameNStart = frameN;  // exact frame index
      
      Text_SS_Prac_CountDown.setAutoDraw(true);
    }

    frameRemains = 3  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Text_SS_Prac_CountDown.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Text_SS_Prac_CountDown.setAutoDraw(false);
    }
    
    if (Text_SS_Prac_CountDown.status === PsychoJS.Status.STARTED){ // only update if being drawn
      Text_SS_Prac_CountDown.setText(countdown);
    }
    
    // *Score_SS_Prac_CountDown* updates
    if (t >= 0.0 && Score_SS_Prac_CountDown.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Score_SS_Prac_CountDown.tStart = t;  // (not accounting for frame time here)
      Score_SS_Prac_CountDown.frameNStart = frameN;  // exact frame index
      
      Score_SS_Prac_CountDown.setAutoDraw(true);
    }

    frameRemains = 3  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Score_SS_Prac_CountDown.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Score_SS_Prac_CountDown.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of SS_Prac_CountDownComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function SS_Prac_CountDownRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'SS_Prac_CountDown'-------
    for (const thisComponent of SS_Prac_CountDownComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var SS_Prac_PreTrialComponents;
function SS_Prac_PreTrialRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'SS_Prac_PreTrial'-------
    t = 0;
    SS_Prac_PreTrialClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    routineTimer.reset(0);
    
    Line_SS_Prac_PreTrial.setPos([0, y_line]);
    Line_SS_Prac_PreTrial.setFillColor(new util.Color(line_col));
    Line_SS_Prac_PreTrial.setLineColor(new util.Color(line_col));
    Line_SS_Prac_PreTrial.setLineWidth(line_wd);
    Score_SS_Prac_PreTrial.setColor(new util.Color(score_color));
    Score_SS_Prac_PreTrial.setText(corr_score);
    Circle_SS_Prac_PreTrial.setPos([0, y_ball]);
    Circle_SS_Prac_PreTrial.setSize([size_ball, size_ball]);
    Circle_SS_Prac_PreTrial.setLineColor(new util.Color(ball_color));
    Circle_SS_Prac_PreTrial.setLineWidth(ball_wd);
    Ball_SS_Prac_PreTrial.setPos([0, y_ball]);
    Ball_SS_Prac_PreTrial.setFillColor(new util.Color(ball_color));
    // keep track of which components have finished
    SS_Prac_PreTrialComponents = [];
    SS_Prac_PreTrialComponents.push(Line_SS_Prac_PreTrial);
    SS_Prac_PreTrialComponents.push(Score_SS_Prac_PreTrial);
    SS_Prac_PreTrialComponents.push(Circle_SS_Prac_PreTrial);
    SS_Prac_PreTrialComponents.push(Ball_SS_Prac_PreTrial);
    
    for (const thisComponent of SS_Prac_PreTrialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function SS_Prac_PreTrialRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'SS_Prac_PreTrial'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = SS_Prac_PreTrialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    size_ball_pretrial = (0 - ((size_ball / t_pretrial) * routineTimer.getTime()));
    
    
    // *Line_SS_Prac_PreTrial* updates
    if (t >= 0.0 && Line_SS_Prac_PreTrial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Line_SS_Prac_PreTrial.tStart = t;  // (not accounting for frame time here)
      Line_SS_Prac_PreTrial.frameNStart = frameN;  // exact frame index
      
      Line_SS_Prac_PreTrial.setAutoDraw(true);
    }

    frameRemains = t_pretrial  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Line_SS_Prac_PreTrial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Line_SS_Prac_PreTrial.setAutoDraw(false);
    }
    
    // *Score_SS_Prac_PreTrial* updates
    if (t >= 0.0 && Score_SS_Prac_PreTrial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Score_SS_Prac_PreTrial.tStart = t;  // (not accounting for frame time here)
      Score_SS_Prac_PreTrial.frameNStart = frameN;  // exact frame index
      
      Score_SS_Prac_PreTrial.setAutoDraw(true);
    }

    frameRemains = t_pretrial  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Score_SS_Prac_PreTrial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Score_SS_Prac_PreTrial.setAutoDraw(false);
    }
    
    // *Circle_SS_Prac_PreTrial* updates
    if (t >= 0.0 && Circle_SS_Prac_PreTrial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Circle_SS_Prac_PreTrial.tStart = t;  // (not accounting for frame time here)
      Circle_SS_Prac_PreTrial.frameNStart = frameN;  // exact frame index
      
      Circle_SS_Prac_PreTrial.setAutoDraw(true);
    }

    frameRemains = t_pretrial  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Circle_SS_Prac_PreTrial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Circle_SS_Prac_PreTrial.setAutoDraw(false);
    }
    
    // *Ball_SS_Prac_PreTrial* updates
    if (t >= 0.0 && Ball_SS_Prac_PreTrial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Ball_SS_Prac_PreTrial.tStart = t;  // (not accounting for frame time here)
      Ball_SS_Prac_PreTrial.frameNStart = frameN;  // exact frame index
      
      Ball_SS_Prac_PreTrial.setAutoDraw(true);
    }

    frameRemains = t_pretrial  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Ball_SS_Prac_PreTrial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Ball_SS_Prac_PreTrial.setAutoDraw(false);
    }
    
    if (Ball_SS_Prac_PreTrial.status === PsychoJS.Status.STARTED){ // only update if being drawn
      Ball_SS_Prac_PreTrial.setSize([size_ball_pretrial, size_ball_pretrial]);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of SS_Prac_PreTrialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function SS_Prac_PreTrialRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'SS_Prac_PreTrial'-------
    for (const thisComponent of SS_Prac_PreTrialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "SS_Prac_PreTrial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _Resp_SS_Prac_MainTrial_allKeys;
var SS_Prac_MainTrialComponents;
function SS_Prac_MainTrialRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'SS_Prac_MainTrial'-------
    t = 0;
    SS_Prac_MainTrialClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    routineTimer.reset(t_max);
    
    Line_SS_Prac_MainTrial.setPos([0, y_line]);
    Line_SS_Prac_MainTrial.setFillColor(new util.Color(line_col));
    Line_SS_Prac_MainTrial.setLineColor(new util.Color(line_col));
    Line_SS_Prac_MainTrial.setLineWidth(line_wd);
    Score_SS_Prac_MainTrial.setColor(new util.Color(score_color));
    Score_SS_Prac_MainTrial.setText(corr_score);
    Ball_SS_Prac_MainTrial.setSize([size_ball, size_ball]);
    Resp_SS_Prac_MainTrial.keys = undefined;
    Resp_SS_Prac_MainTrial.rt = undefined;
    _Resp_SS_Prac_MainTrial_allKeys = [];
    // keep track of which components have finished
    SS_Prac_MainTrialComponents = [];
    SS_Prac_MainTrialComponents.push(Line_SS_Prac_MainTrial);
    SS_Prac_MainTrialComponents.push(Score_SS_Prac_MainTrial);
    SS_Prac_MainTrialComponents.push(Ball_SS_Prac_MainTrial);
    SS_Prac_MainTrialComponents.push(Resp_SS_Prac_MainTrial);
    
    for (const thisComponent of SS_Prac_MainTrialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function SS_Prac_MainTrialRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'SS_Prac_MainTrial'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = SS_Prac_MainTrialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    y_ball_maintrial = (y_ball - (speed * (t_max - routineTimer.getTime())));
    
    
    // *Line_SS_Prac_MainTrial* updates
    if (t >= 0.0 && Line_SS_Prac_MainTrial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Line_SS_Prac_MainTrial.tStart = t;  // (not accounting for frame time here)
      Line_SS_Prac_MainTrial.frameNStart = frameN;  // exact frame index
      
      Line_SS_Prac_MainTrial.setAutoDraw(true);
    }

    frameRemains = dur_trial  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Line_SS_Prac_MainTrial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Line_SS_Prac_MainTrial.setAutoDraw(false);
    }
    
    // *Score_SS_Prac_MainTrial* updates
    if (t >= 0.0 && Score_SS_Prac_MainTrial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Score_SS_Prac_MainTrial.tStart = t;  // (not accounting for frame time here)
      Score_SS_Prac_MainTrial.frameNStart = frameN;  // exact frame index
      
      Score_SS_Prac_MainTrial.setAutoDraw(true);
    }

    frameRemains = dur_trial  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Score_SS_Prac_MainTrial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Score_SS_Prac_MainTrial.setAutoDraw(false);
    }
    
    // *Ball_SS_Prac_MainTrial* updates
    if (t >= 0.0 && Ball_SS_Prac_MainTrial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Ball_SS_Prac_MainTrial.tStart = t;  // (not accounting for frame time here)
      Ball_SS_Prac_MainTrial.frameNStart = frameN;  // exact frame index
      
      Ball_SS_Prac_MainTrial.setAutoDraw(true);
    }

    frameRemains = dur_trial  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Ball_SS_Prac_MainTrial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Ball_SS_Prac_MainTrial.setAutoDraw(false);
    }
    
    if (Ball_SS_Prac_MainTrial.status === PsychoJS.Status.STARTED){ // only update if being drawn
      Ball_SS_Prac_MainTrial.setPos([0, y_ball_maintrial]);
      Ball_SS_Prac_MainTrial.setFillColor(new util.Color(ball_color));
    }
    
    // *Resp_SS_Prac_MainTrial* updates
    if (t >= 0.0 && Resp_SS_Prac_MainTrial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Resp_SS_Prac_MainTrial.tStart = t;  // (not accounting for frame time here)
      Resp_SS_Prac_MainTrial.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Resp_SS_Prac_MainTrial.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Resp_SS_Prac_MainTrial.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Resp_SS_Prac_MainTrial.clearEvents(); });
    }

    frameRemains = dur_trial  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Resp_SS_Prac_MainTrial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Resp_SS_Prac_MainTrial.status = PsychoJS.Status.FINISHED;
  }

    if (Resp_SS_Prac_MainTrial.status === PsychoJS.Status.STARTED) {
      let theseKeys = Resp_SS_Prac_MainTrial.getKeys({keyList: ['j', 'k'], waitRelease: false});
      _Resp_SS_Prac_MainTrial_allKeys = _Resp_SS_Prac_MainTrial_allKeys.concat(theseKeys);
      if (_Resp_SS_Prac_MainTrial_allKeys.length > 0) {
        Resp_SS_Prac_MainTrial.keys = _Resp_SS_Prac_MainTrial_allKeys[0].name;  // just the first key pressed
        Resp_SS_Prac_MainTrial.rt = _Resp_SS_Prac_MainTrial_allKeys[0].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of SS_Prac_MainTrialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var rt;
var feedback_image;
var feedback_color;
var feedback_sound;
var corr;
var y_ball_posttrial;
function SS_Prac_MainTrialRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'SS_Prac_MainTrial'-------
    for (const thisComponent of SS_Prac_MainTrialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if ((Resp_SS_Prac_MainTrial.keys.length === 0)) {
        rt = 99;
        ball_opa = 0;
        press = [];
        feedback_image = cross;
        feedback_color = [1, (- 1), (- 1)];
        feedback_sound = buzz;
        corr = 0;
    } else {
        rt = Resp_SS_Prac_MainTrial.rt;
        ball_opa = 1;
        press = Resp_SS_Prac_MainTrial.keys;
        if ((((t_max - timing_tol) <= Resp_SS_Prac_MainTrial.rt) && (Resp_SS_Prac_MainTrial.rt <= (t_max + timing_tol)))) {
            feedback_image = check;
            feedback_color = [(- 1), 1, (- 1)];
            feedback_sound = coin;
            corr = 1;
        } else {
            feedback_image = cross;
            feedback_color = [1, (- 1), (- 1)];
            feedback_sound = buzz;
            corr = 0;
        }
    }
    if ((corr === 0)) {
        corr_score = 0;
    } else {
        corr_score = (corr_score + 1);
    }
    y_ball_posttrial = (y_ball_maintrial + (speed * (1 / 60)));
    
    psychoJS.experiment.addData('Resp_SS_Prac_MainTrial.keys', Resp_SS_Prac_MainTrial.keys);
    if (typeof Resp_SS_Prac_MainTrial.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Resp_SS_Prac_MainTrial.rt', Resp_SS_Prac_MainTrial.rt);
        routineTimer.reset();
        }
    
    Resp_SS_Prac_MainTrial.stop();
    // the Routine "SS_Prac_MainTrial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var SS_Prac_PostTrialComponents;
function SS_Prac_PostTrialRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'SS_Prac_PostTrial'-------
    t = 0;
    SS_Prac_PostTrialClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    Sound_SS_Prac_PostTrial = new sound.Sound({
    win: psychoJS.window,
    value: feedback_sound,
    secs: -1,
    });
    Sound_SS_Prac_PostTrial.setVolume(sound_vol);
    Line_SS_Prac_PostTrial.setPos([0, y_line]);
    Line_SS_Prac_PostTrial.setFillColor(new util.Color(line_col));
    Line_SS_Prac_PostTrial.setLineColor(new util.Color(line_col));
    Line_SS_Prac_PostTrial.setLineWidth(line_wd);
    Image_SS_Prac_PostTrial.setColor(new util.Color(feedback_color));
    Image_SS_Prac_PostTrial.setPos([0.2, y_line]);
    Image_SS_Prac_PostTrial.setImage(feedback_image);
    Score_SS_Prac_PostTrial.setColor(new util.Color(score_color));
    Score_SS_Prac_PostTrial.setText(corr_score);
    Ball_SS_Prac_PostTrial.setOpacity(ball_opa);
    Ball_SS_Prac_PostTrial.setPos([0, y_ball_posttrial]);
    Ball_SS_Prac_PostTrial.setSize([size_ball, size_ball]);
    psychoJS.experiment.addData("Practice", prac);
    psychoJS.experiment.addData("grp", grp);
    psychoJS.experiment.addData("go_color", go_color);
    psychoJS.experiment.addData("default_color", default_color);
    psychoJS.experiment.addData("block_num", block_count);
    psychoJS.experiment.addData("dt", dt);
    psychoJS.experiment.addData("ct", ct);
    psychoJS.experiment.addData("key", press);
    psychoJS.experiment.addData("rt", rt);
    psychoJS.experiment.addData("Correct", corr);
    psychoJS.experiment.addData("trial_Count", trial_count);
    psychoJS.experiment.addData("session", session);
    trial_count = (trial_count + 1);
    if ((corr_score === num_prac_crit)) {
        SS_Prac_Trial_Loop.finished = true;
        block_count = (block_count + 1);
    }
    
    // keep track of which components have finished
    SS_Prac_PostTrialComponents = [];
    SS_Prac_PostTrialComponents.push(Sound_SS_Prac_PostTrial);
    SS_Prac_PostTrialComponents.push(Line_SS_Prac_PostTrial);
    SS_Prac_PostTrialComponents.push(Image_SS_Prac_PostTrial);
    SS_Prac_PostTrialComponents.push(Score_SS_Prac_PostTrial);
    SS_Prac_PostTrialComponents.push(Ball_SS_Prac_PostTrial);
    
    for (const thisComponent of SS_Prac_PostTrialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function SS_Prac_PostTrialRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'SS_Prac_PostTrial'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = SS_Prac_PostTrialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // start/stop Sound_SS_Prac_PostTrial
    if (t >= 0.0 && Sound_SS_Prac_PostTrial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Sound_SS_Prac_PostTrial.tStart = t;  // (not accounting for frame time here)
      Sound_SS_Prac_PostTrial.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ Sound_SS_Prac_PostTrial.play(); });  // screen flip
      Sound_SS_Prac_PostTrial.status = PsychoJS.Status.STARTED;
    }

    frameRemains = dur_feedback  - psychoJS.window.monitorFramePeriod * 0.75;
    if (t >= frameRemains && Sound_SS_Prac_PostTrial.status === PsychoJS.Status.STARTED) {
      //Sound_SS_Prac_PostTrial.stop();  // stop the sound (if longer than duration)
      Sound_SS_Prac_PostTrial.status = PsychoJS.Status.FINISHED;
    }
    
    // *Line_SS_Prac_PostTrial* updates
    if (t >= 0.0 && Line_SS_Prac_PostTrial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Line_SS_Prac_PostTrial.tStart = t;  // (not accounting for frame time here)
      Line_SS_Prac_PostTrial.frameNStart = frameN;  // exact frame index
      
      Line_SS_Prac_PostTrial.setAutoDraw(true);
    }

    frameRemains = dur_feedback  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Line_SS_Prac_PostTrial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Line_SS_Prac_PostTrial.setAutoDraw(false);
    }
    
    // *Image_SS_Prac_PostTrial* updates
    if (t >= 0.0 && Image_SS_Prac_PostTrial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Image_SS_Prac_PostTrial.tStart = t;  // (not accounting for frame time here)
      Image_SS_Prac_PostTrial.frameNStart = frameN;  // exact frame index
      
      Image_SS_Prac_PostTrial.setAutoDraw(true);
    }

    frameRemains = dur_feedback  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Image_SS_Prac_PostTrial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Image_SS_Prac_PostTrial.setAutoDraw(false);
    }
    
    // *Score_SS_Prac_PostTrial* updates
    if (t >= 0.0 && Score_SS_Prac_PostTrial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Score_SS_Prac_PostTrial.tStart = t;  // (not accounting for frame time here)
      Score_SS_Prac_PostTrial.frameNStart = frameN;  // exact frame index
      
      Score_SS_Prac_PostTrial.setAutoDraw(true);
    }

    frameRemains = dur_feedback  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Score_SS_Prac_PostTrial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Score_SS_Prac_PostTrial.setAutoDraw(false);
    }
    
    // *Ball_SS_Prac_PostTrial* updates
    if (t >= 0.0 && Ball_SS_Prac_PostTrial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Ball_SS_Prac_PostTrial.tStart = t;  // (not accounting for frame time here)
      Ball_SS_Prac_PostTrial.frameNStart = frameN;  // exact frame index
      
      Ball_SS_Prac_PostTrial.setAutoDraw(true);
    }

    frameRemains = dur_feedback  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Ball_SS_Prac_PostTrial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Ball_SS_Prac_PostTrial.setAutoDraw(false);
    }
    
    if (Ball_SS_Prac_PostTrial.status === PsychoJS.Status.STARTED){ // only update if being drawn
      Ball_SS_Prac_PostTrial.setFillColor(new util.Color(ball_color));
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of SS_Prac_PostTrialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function SS_Prac_PostTrialRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'SS_Prac_PostTrial'-------
    for (const thisComponent of SS_Prac_PostTrialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    //Sound_SS_Prac_PostTrial.stop();  // ensure sound has stopped at end of routine
    // the Routine "SS_Prac_PostTrial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var change_color;
var default_color_text;
var change_color_text;
var go_color_text;
var stop_color_text;
var _Instr_SS_Key_allKeys;
var Instr_SSComponents;
function Instr_SSRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Instr_SS'-------
    t = 0;
    Instr_SSClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    if ((grp === 0)) {
        if ((block_count <= (num_block / 2))) {
            default_color = go_color;
            change_color = stop_color;
        } else {
            default_color = stop_color;
            change_color = go_color;
        }
    } else {
        if ((block_count <= (num_block / 2))) {
            default_color = stop_color;
            change_color = go_color;
        } else {
            default_color = go_color;
            change_color = stop_color;
        }
    }
    if ((default_color === [1, 1, 1])) {
        default_color_text = "WHITE";
    } else {
        default_color_text = "BLACK";
    }
    if ((change_color === [1, 1, 1])) {
        change_color_text = "WHITE";
    } else {
        change_color_text = "BLACK";
    }
    if ((go_color === [1, 1, 1])) {
        go_color_text = "WHITE";
    } else {
        go_color_text = "BLACK";
    }
    if ((stop_color === [1, 1, 1])) {
        stop_color_text = "WHITE";
    } else {
        stop_color_text = "BLACK";
    }
    block_count = 1;
    timing_tol = 0.03;
    $min = (speed * (t_max - timing_tol));
    $max = (speed * (t_max + timing_tol));
    size_ball = ($max - $min);
    prac = 0;
    corr_score = 0;
    score_opa = 0;
    
    Instr_SS_Text.setText(instr_ss_text);
    Instr_SS_Key.keys = undefined;
    Instr_SS_Key.rt = undefined;
    _Instr_SS_Key_allKeys = [];
    // keep track of which components have finished
    Instr_SSComponents = [];
    Instr_SSComponents.push(Instr_SS_Text);
    Instr_SSComponents.push(Instr_SS_Key);
    
    for (const thisComponent of Instr_SSComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Instr_SSRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Instr_SS'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Instr_SSClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instr_SS_Text* updates
    if (t >= 0.0 && Instr_SS_Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr_SS_Text.tStart = t;  // (not accounting for frame time here)
      Instr_SS_Text.frameNStart = frameN;  // exact frame index
      
      Instr_SS_Text.setAutoDraw(true);
    }

    
    // *Instr_SS_Key* updates
    if (t >= 0.0 && Instr_SS_Key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr_SS_Key.tStart = t;  // (not accounting for frame time here)
      Instr_SS_Key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Instr_SS_Key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Instr_SS_Key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Instr_SS_Key.clearEvents(); });
    }

    if (Instr_SS_Key.status === PsychoJS.Status.STARTED) {
      let theseKeys = Instr_SS_Key.getKeys({keyList: ['space'], waitRelease: false});
      _Instr_SS_Key_allKeys = _Instr_SS_Key_allKeys.concat(theseKeys);
      if (_Instr_SS_Key_allKeys.length > 0) {
        Instr_SS_Key.keys = _Instr_SS_Key_allKeys[0].name;  // just the first key pressed
        Instr_SS_Key.rt = _Instr_SS_Key_allKeys[0].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instr_SSComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instr_SSRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Instr_SS'-------
    for (const thisComponent of Instr_SSComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Instr_SS_Key.keys', Instr_SS_Key.keys);
    if (typeof Instr_SS_Key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Instr_SS_Key.rt', Instr_SS_Key.rt);
        routineTimer.reset();
        }
    
    Instr_SS_Key.stop();
    // the Routine "Instr_SS" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var show_instr;
var SS_Instr_Load_InfoComponents;
function SS_Instr_Load_InfoRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'SS_Instr_Load_Info'-------
    t = 0;
    SS_Instr_Load_InfoClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    show_instr = 0;
    if (((block_count === 1) || (block_count === 7))) {
        show_instr = 1;
    } else {
        show_instr = 0;
    }
    text1 = ``;
    text2 = ``;
    text3 = ``;
    if ((block_count === 1)) {
        ss_instr_text2 = `In the upcoming blocks,
    the ball always starts in ${default_color_text}
    and sometimes change to ${change_color_text}`
    ;
    } else {
        if ((block_count === ((num_block / 2) + 1))) {
            ss_instr_text2 = `Now the ball always starts in ${change_color_text} and occationally changes to ${default_color_text}`;
        }
    }
    ss_instr_text1 = `Your job is to PRESS (j) when the ${go_color_text} ball overlaps the line
    and DO NOT PRESS ANY KEY when the ${stop_color_text} ball overlaps the line`
    ;
    ss_instr_text3 = `Whenever you are ready, press (j) to start the task`;
    corr_score = 0;
    score_opa = 0;
    trial_count = 0;
    trial_count_instr = 0;
    countdown = 3;
    
    // keep track of which components have finished
    SS_Instr_Load_InfoComponents = [];
    
    for (const thisComponent of SS_Instr_Load_InfoComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function SS_Instr_Load_InfoRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'SS_Instr_Load_Info'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = SS_Instr_Load_InfoClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of SS_Instr_Load_InfoComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function SS_Instr_Load_InfoRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'SS_Instr_Load_Info'-------
    for (const thisComponent of SS_Instr_Load_InfoComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "SS_Instr_Load_Info" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _Resp_Instr_Block_Num_allKeys;
var Instr_Block_NumComponents;
function Instr_Block_NumRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Instr_Block_Num'-------
    t = 0;
    Instr_Block_NumClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    Text_Instr_Block_Num.setText((('Block ' + block_count) + '\nPress (j) to start'));
    Resp_Instr_Block_Num.keys = undefined;
    Resp_Instr_Block_Num.rt = undefined;
    _Resp_Instr_Block_Num_allKeys = [];
    // keep track of which components have finished
    Instr_Block_NumComponents = [];
    Instr_Block_NumComponents.push(Text_Instr_Block_Num);
    Instr_Block_NumComponents.push(Resp_Instr_Block_Num);
    
    for (const thisComponent of Instr_Block_NumComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Instr_Block_NumRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Instr_Block_Num'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Instr_Block_NumClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Text_Instr_Block_Num* updates
    if (t >= 0.0 && Text_Instr_Block_Num.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Text_Instr_Block_Num.tStart = t;  // (not accounting for frame time here)
      Text_Instr_Block_Num.frameNStart = frameN;  // exact frame index
      
      Text_Instr_Block_Num.setAutoDraw(true);
    }

    
    // *Resp_Instr_Block_Num* updates
    if (t >= 0.0 && Resp_Instr_Block_Num.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Resp_Instr_Block_Num.tStart = t;  // (not accounting for frame time here)
      Resp_Instr_Block_Num.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Resp_Instr_Block_Num.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Resp_Instr_Block_Num.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Resp_Instr_Block_Num.clearEvents(); });
    }

    if (Resp_Instr_Block_Num.status === PsychoJS.Status.STARTED) {
      let theseKeys = Resp_Instr_Block_Num.getKeys({keyList: ['j'], waitRelease: false});
      _Resp_Instr_Block_Num_allKeys = _Resp_Instr_Block_Num_allKeys.concat(theseKeys);
      if (_Resp_Instr_Block_Num_allKeys.length > 0) {
        Resp_Instr_Block_Num.keys = _Resp_Instr_Block_Num_allKeys[0].name;  // just the first key pressed
        Resp_Instr_Block_Num.rt = _Resp_Instr_Block_Num_allKeys[0].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instr_Block_NumComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instr_Block_NumRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Instr_Block_Num'-------
    for (const thisComponent of Instr_Block_NumComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Resp_Instr_Block_Num.keys', Resp_Instr_Block_Num.keys);
    if (typeof Resp_Instr_Block_Num.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Resp_Instr_Block_Num.rt', Resp_Instr_Block_Num.rt);
        routineTimer.reset();
        }
    
    Resp_Instr_Block_Num.stop();
    // the Routine "Instr_Block_Num" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var SS_CountDownComponents;
function SS_CountDownRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'SS_CountDown'-------
    t = 0;
    SS_CountDownClock.reset(); // clock
    frameN = -1;
    routineTimer.add(3.000000);
    // update component parameters for each repeat
    routineTimer.reset(3);
    
    Line_SS_CountDown.setPos([0, y_line]);
    Line_SS_CountDown.setFillColor(new util.Color(line_col));
    Line_SS_CountDown.setLineColor(new util.Color(line_col));
    Line_SS_CountDown.setLineWidth(line_wd);
    // keep track of which components have finished
    SS_CountDownComponents = [];
    SS_CountDownComponents.push(Line_SS_CountDown);
    SS_CountDownComponents.push(Text_SS_CountDown);
    
    for (const thisComponent of SS_CountDownComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function SS_CountDownRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'SS_CountDown'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = SS_CountDownClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if (((1 <= routineTimer.getTime()) && (routineTimer.getTime() < 2))) {
        countdown = 2;
    } else {
        if ((routineTimer.getTime() < 1)) {
            countdown = 1;
        }
    }
    
    
    // *Line_SS_CountDown* updates
    if (t >= 0.0 && Line_SS_CountDown.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Line_SS_CountDown.tStart = t;  // (not accounting for frame time here)
      Line_SS_CountDown.frameNStart = frameN;  // exact frame index
      
      Line_SS_CountDown.setAutoDraw(true);
    }

    frameRemains = 3  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Line_SS_CountDown.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Line_SS_CountDown.setAutoDraw(false);
    }
    
    // *Text_SS_CountDown* updates
    if (t >= 0.0 && Text_SS_CountDown.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Text_SS_CountDown.tStart = t;  // (not accounting for frame time here)
      Text_SS_CountDown.frameNStart = frameN;  // exact frame index
      
      Text_SS_CountDown.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Text_SS_CountDown.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Text_SS_CountDown.setAutoDraw(false);
    }
    
    if (Text_SS_CountDown.status === PsychoJS.Status.STARTED){ // only update if being drawn
      Text_SS_CountDown.setText(countdown);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of SS_CountDownComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function SS_CountDownRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'SS_CountDown'-------
    for (const thisComponent of SS_CountDownComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var SS_PreTrialComponents;
function SS_PreTrialRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'SS_PreTrial'-------
    t = 0;
    SS_PreTrialClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    routineTimer.reset(0);
    if ((((trial_count === 0) || (trial_count === 2)) || (trial_count === 4))) {
        ct = 99;
        dt = (t_max - ct);
    } else {
        if ((((trial_count === 1) || (trial_count === 3)) || (trial_count === 5))) {
            ct = 0;
            dt = (t_max - ct);
        } else {
            sample_ind = dt_ind[(trial_count - 6)];
            dt = ((MATH.random() * (dt_interval[sample_ind][1] - dt_interval[sample_ind][0])) + dt_interval[sample_ind][0]);
            ct = (t_max - dt);
        }
    }
    ball_color = default_color;
    
    Line_SS_PreTrial.setPos([0, y_line]);
    Line_SS_PreTrial.setFillColor(new util.Color(line_col));
    Line_SS_PreTrial.setLineColor(new util.Color(line_col));
    Line_SS_PreTrial.setLineWidth(line_wd);
    Circle_SS_PreTrial.setPos([0, y_ball]);
    Circle_SS_PreTrial.setSize([size_ball, size_ball]);
    Circle_SS_PreTrial.setLineColor(new util.Color(ball_color));
    Circle_SS_PreTrial.setLineWidth(ball_wd);
    Ball_SS_PreTrial.setPos([0, y_ball]);
    Ball_SS_PreTrial.setFillColor(new util.Color(ball_color));
    // keep track of which components have finished
    SS_PreTrialComponents = [];
    SS_PreTrialComponents.push(Line_SS_PreTrial);
    SS_PreTrialComponents.push(Circle_SS_PreTrial);
    SS_PreTrialComponents.push(Ball_SS_PreTrial);
    
    for (const thisComponent of SS_PreTrialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function SS_PreTrialRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'SS_PreTrial'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = SS_PreTrialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    size_ball_pretrial = (0 - ((size_ball / t_pretrial) * routineTimer.getTime()));
    
    
    // *Line_SS_PreTrial* updates
    if (t >= 0.0 && Line_SS_PreTrial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Line_SS_PreTrial.tStart = t;  // (not accounting for frame time here)
      Line_SS_PreTrial.frameNStart = frameN;  // exact frame index
      
      Line_SS_PreTrial.setAutoDraw(true);
    }

    frameRemains = t_pretrial  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Line_SS_PreTrial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Line_SS_PreTrial.setAutoDraw(false);
    }
    
    // *Circle_SS_PreTrial* updates
    if (t >= 0.0 && Circle_SS_PreTrial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Circle_SS_PreTrial.tStart = t;  // (not accounting for frame time here)
      Circle_SS_PreTrial.frameNStart = frameN;  // exact frame index
      
      Circle_SS_PreTrial.setAutoDraw(true);
    }

    frameRemains = t_pretrial  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Circle_SS_PreTrial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Circle_SS_PreTrial.setAutoDraw(false);
    }
    
    // *Ball_SS_PreTrial* updates
    if (t >= 0.0 && Ball_SS_PreTrial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Ball_SS_PreTrial.tStart = t;  // (not accounting for frame time here)
      Ball_SS_PreTrial.frameNStart = frameN;  // exact frame index
      
      Ball_SS_PreTrial.setAutoDraw(true);
    }

    frameRemains = t_pretrial  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Ball_SS_PreTrial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Ball_SS_PreTrial.setAutoDraw(false);
    }
    
    if (Ball_SS_PreTrial.status === PsychoJS.Status.STARTED){ // only update if being drawn
      Ball_SS_PreTrial.setSize([size_ball_pretrial, size_ball_pretrial]);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of SS_PreTrialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function SS_PreTrialRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'SS_PreTrial'-------
    for (const thisComponent of SS_PreTrialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "SS_PreTrial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _Resp_SS_MainTrial_allKeys;
var SS_MainTrialComponents;
function SS_MainTrialRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'SS_MainTrial'-------
    t = 0;
    SS_MainTrialClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    routineTimer.reset(t_max);
    
    Line_SS_MainTrial.setPos([0, y_line]);
    Line_SS_MainTrial.setFillColor(new util.Color(line_col));
    Line_SS_MainTrial.setLineColor(new util.Color(line_col));
    Line_SS_MainTrial.setLineWidth(line_wd);
    Ball_SS_MainTrial.setSize([size_ball, size_ball]);
    Resp_SS_MainTrial.keys = undefined;
    Resp_SS_MainTrial.rt = undefined;
    _Resp_SS_MainTrial_allKeys = [];
    // keep track of which components have finished
    SS_MainTrialComponents = [];
    SS_MainTrialComponents.push(Line_SS_MainTrial);
    SS_MainTrialComponents.push(Ball_SS_MainTrial);
    SS_MainTrialComponents.push(Resp_SS_MainTrial);
    
    for (const thisComponent of SS_MainTrialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function SS_MainTrialRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'SS_MainTrial'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = SS_MainTrialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    y_ball_maintrial = (y_ball - (speed * (t_max - routineTimer.getTime())));
    if (((t_max - routineTimer.getTime()) < ct)) {
        ball_color = default_color;
    } else {
        ball_color = change_color;
    }
    
    
    // *Line_SS_MainTrial* updates
    if (t >= 0.0 && Line_SS_MainTrial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Line_SS_MainTrial.tStart = t;  // (not accounting for frame time here)
      Line_SS_MainTrial.frameNStart = frameN;  // exact frame index
      
      Line_SS_MainTrial.setAutoDraw(true);
    }

    frameRemains = dur_trial  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Line_SS_MainTrial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Line_SS_MainTrial.setAutoDraw(false);
    }
    
    // *Ball_SS_MainTrial* updates
    if (t >= 0.0 && Ball_SS_MainTrial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Ball_SS_MainTrial.tStart = t;  // (not accounting for frame time here)
      Ball_SS_MainTrial.frameNStart = frameN;  // exact frame index
      
      Ball_SS_MainTrial.setAutoDraw(true);
    }

    frameRemains = dur_trial  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Ball_SS_MainTrial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Ball_SS_MainTrial.setAutoDraw(false);
    }
    
    if (Ball_SS_MainTrial.status === PsychoJS.Status.STARTED){ // only update if being drawn
      Ball_SS_MainTrial.setPos([0, y_ball_maintrial]);
      Ball_SS_MainTrial.setFillColor(new util.Color(ball_color));
    }
    
    // *Resp_SS_MainTrial* updates
    if (t >= 0.0 && Resp_SS_MainTrial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Resp_SS_MainTrial.tStart = t;  // (not accounting for frame time here)
      Resp_SS_MainTrial.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Resp_SS_MainTrial.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Resp_SS_MainTrial.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Resp_SS_MainTrial.clearEvents(); });
    }

    frameRemains = dur_trial  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Resp_SS_MainTrial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Resp_SS_MainTrial.status = PsychoJS.Status.FINISHED;
  }

    if (Resp_SS_MainTrial.status === PsychoJS.Status.STARTED) {
      let theseKeys = Resp_SS_MainTrial.getKeys({keyList: ['j', 'k'], waitRelease: false});
      _Resp_SS_MainTrial_allKeys = _Resp_SS_MainTrial_allKeys.concat(theseKeys);
      if (_Resp_SS_MainTrial_allKeys.length > 0) {
        Resp_SS_MainTrial.keys = _Resp_SS_MainTrial_allKeys[0].name;  // just the first key pressed
        Resp_SS_MainTrial.rt = _Resp_SS_MainTrial_allKeys[0].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of SS_MainTrialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function SS_MainTrialRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'SS_MainTrial'-------
    for (const thisComponent of SS_MainTrialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if ((Resp_SS_MainTrial.keys.length === 0)) {
        rt = 99;
        ball_opa = 0;
        press = [];
        if ((ball_color === go_color)) {
            feedback_image = cross;
            feedback_color = [1, (- 1), (- 1)];
            feedback_sound = buzz;
            corr = 0;
        } else {
            feedback_image = check;
            feedback_color = [(- 1), 1, (- 1)];
            feedback_sound = coin;
            corr = 1;
        }
    } else {
        rt = Resp_SS_MainTrial.rt;
        ball_opa = 1;
        press = Resp_SS_MainTrial.keys;
        if ((ball_color === go_color)) {
            if ((((t_max - timing_tol) <= Resp_SS_MainTrial.rt) && (Resp_SS_MainTrial.rt <= (t_max + timing_tol)))) {
                feedback_image = check;
                feedback_color = [(- 1), 1, (- 1)];
                feedback_sound = coin;
                corr = 1;
            } else {
                feedback_image = cross;
                feedback_color = [1, (- 1), (- 1)];
                feedback_sound = buzz;
                corr = 0;
            }
        } else {
            feedback_image = cross;
            feedback_color = [1, (- 1), (- 1)];
            feedback_sound = buzz;
            corr = 0;
        }
    }
    y_ball_posttrial = (y_ball_maintrial + (speed * (1 / 60)));
    
    psychoJS.experiment.addData('Resp_SS_MainTrial.keys', Resp_SS_MainTrial.keys);
    if (typeof Resp_SS_MainTrial.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Resp_SS_MainTrial.rt', Resp_SS_MainTrial.rt);
        routineTimer.reset();
        }
    
    Resp_SS_MainTrial.stop();
    // the Routine "SS_MainTrial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var SS_PostTrialComponents;
function SS_PostTrialRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'SS_PostTrial'-------
    t = 0;
    SS_PostTrialClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    Sound_SS_PostTrial = new sound.Sound({
    win: psychoJS.window,
    value: feedback_sound,
    secs: -1,
    });
    Sound_SS_PostTrial.setVolume(sound_vol);
    Line_SS_PostTrial.setPos([0, y_line]);
    Line_SS_PostTrial.setFillColor(new util.Color(line_col));
    Line_SS_PostTrial.setLineColor(new util.Color(line_col));
    Line_SS_PostTrial.setLineWidth(line_wd);
    Image_SS_PostTrial.setColor(new util.Color(feedback_color));
    Image_SS_PostTrial.setPos([0.2, y_line]);
    Image_SS_PostTrial.setImage(feedback_image);
    Ball_SS_PostTrial.setOpacity(ball_opa);
    Ball_SS_PostTrial.setPos([0, y_ball_posttrial]);
    Ball_SS_PostTrial.setSize([size_ball, size_ball]);
    psychoJS.experiment.addData("Practice", prac);
    psychoJS.experiment.addData("grp", grp);
    psychoJS.experiment.addData("go_color", go_color);
    psychoJS.experiment.addData("default_color", default_color);
    psychoJS.experiment.addData("block_num", block_count);
    psychoJS.experiment.addData("dt", dt);
    psychoJS.experiment.addData("ct", ct);
    psychoJS.experiment.addData("key", press);
    psychoJS.experiment.addData("rt", rt);
    psychoJS.experiment.addData("Correct", corr);
    psychoJS.experiment.addData("trial_Count", trial_count);
    psychoJS.experiment.addData("session", session);
    trial_count = (trial_count + 1);
    if ((trial_count === num_trial)) {
        block_count = (block_count + 1);
    }
    
    // keep track of which components have finished
    SS_PostTrialComponents = [];
    SS_PostTrialComponents.push(Sound_SS_PostTrial);
    SS_PostTrialComponents.push(Line_SS_PostTrial);
    SS_PostTrialComponents.push(Image_SS_PostTrial);
    SS_PostTrialComponents.push(Ball_SS_PostTrial);
    
    for (const thisComponent of SS_PostTrialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function SS_PostTrialRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'SS_PostTrial'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = SS_PostTrialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // start/stop Sound_SS_PostTrial
    if (t >= 0.0 && Sound_SS_PostTrial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Sound_SS_PostTrial.tStart = t;  // (not accounting for frame time here)
      Sound_SS_PostTrial.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ Sound_SS_PostTrial.play(); });  // screen flip
      Sound_SS_PostTrial.status = PsychoJS.Status.STARTED;
    }

    frameRemains = dur_feedback  - psychoJS.window.monitorFramePeriod * 0.75;
    if (t >= frameRemains && Sound_SS_PostTrial.status === PsychoJS.Status.STARTED) {
      //Sound_SS_PostTrial.stop();  // stop the sound (if longer than duration)
      Sound_SS_PostTrial.status = PsychoJS.Status.FINISHED;
    }
    
    // *Line_SS_PostTrial* updates
    if (t >= 0.0 && Line_SS_PostTrial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Line_SS_PostTrial.tStart = t;  // (not accounting for frame time here)
      Line_SS_PostTrial.frameNStart = frameN;  // exact frame index
      
      Line_SS_PostTrial.setAutoDraw(true);
    }

    frameRemains = dur_feedback  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Line_SS_PostTrial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Line_SS_PostTrial.setAutoDraw(false);
    }
    
    // *Image_SS_PostTrial* updates
    if (t >= 0.0 && Image_SS_PostTrial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Image_SS_PostTrial.tStart = t;  // (not accounting for frame time here)
      Image_SS_PostTrial.frameNStart = frameN;  // exact frame index
      
      Image_SS_PostTrial.setAutoDraw(true);
    }

    frameRemains = dur_feedback  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Image_SS_PostTrial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Image_SS_PostTrial.setAutoDraw(false);
    }
    
    // *Ball_SS_PostTrial* updates
    if (t >= 0.0 && Ball_SS_PostTrial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Ball_SS_PostTrial.tStart = t;  // (not accounting for frame time here)
      Ball_SS_PostTrial.frameNStart = frameN;  // exact frame index
      
      Ball_SS_PostTrial.setAutoDraw(true);
    }

    frameRemains = dur_feedback  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Ball_SS_PostTrial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Ball_SS_PostTrial.setAutoDraw(false);
    }
    
    if (Ball_SS_PostTrial.status === PsychoJS.Status.STARTED){ // only update if being drawn
      Ball_SS_PostTrial.setFillColor(new util.Color(ball_color));
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of SS_PostTrialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function SS_PostTrialRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'SS_PostTrial'-------
    for (const thisComponent of SS_PostTrialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    //Sound_SS_PostTrial.stop();  // ensure sound has stopped at end of routine
    // the Routine "SS_PostTrial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(thisScheduler, loop) {
  // ------Prepare for next entry------
  return function () {
    if (typeof loop !== 'undefined') {
      // ------Check if user ended loop early------
      if (loop.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(loop);
        }
      thisScheduler.stop();
      } else {
        const thisTrial = loop.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(loop);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(trials) {
  return function () {
    psychoJS.importAttributes(trials.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
