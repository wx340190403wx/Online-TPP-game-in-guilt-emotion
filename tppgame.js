/******************* 
 * Gameyo1211 Test *
 *******************/

import { core, data, sound, util, visual } from './lib/psychojs-2021.2.3.js';
const { PsychoJS } = core;
const { TrialHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'gameyo1211';  // from the Builder filename that created this script
let expInfo = {'以下为答题说明↓↓↓': ['请在"participant"一栏中输入您姓名的【全部拼音】'], 'participant': '', '性别': ['男', '女'], '年龄': '', '支付宝账号(请与问卷中一致)': ''};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color('white'),
  units: 'norm',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
const trials_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_2LoopBegin(trials_2LoopScheduler));
flowScheduler.add(trials_2LoopScheduler);
flowScheduler.add(trials_2LoopEnd);
flowScheduler.add(chouhaoRoutineBegin());
flowScheduler.add(chouhaoRoutineEachFrame());
flowScheduler.add(chouhaoRoutineEnd());
flowScheduler.add(nichengfenpeiRoutineBegin());
flowScheduler.add(nichengfenpeiRoutineEachFrame());
flowScheduler.add(nichengfenpeiRoutineEnd());
flowScheduler.add(pipeiRoutineBegin());
flowScheduler.add(pipeiRoutineEachFrame());
flowScheduler.add(pipeiRoutineEnd());
flowScheduler.add(chengongRoutineBegin());
flowScheduler.add(chengongRoutineEachFrame());
flowScheduler.add(chengongRoutineEnd());
flowScheduler.add(startRoutineBegin());
flowScheduler.add(startRoutineEachFrame());
flowScheduler.add(startRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(tongjiaRoutineBegin());
flowScheduler.add(tongjiaRoutineEachFrame());
flowScheduler.add(tongjiaRoutineEnd());
flowScheduler.add(jieguoneneRoutineBegin());
flowScheduler.add(jieguoneneRoutineEachFrame());
flowScheduler.add(jieguoneneRoutineEnd());
flowScheduler.add(guilt1RoutineBegin());
flowScheduler.add(guilt1RoutineEachFrame());
flowScheduler.add(guilt1RoutineEnd());
flowScheduler.add(ceshiRoutineBegin());
flowScheduler.add(ceshiRoutineEachFrame());
flowScheduler.add(ceshiRoutineEnd());
flowScheduler.add(chengshangqixiaRoutineBegin());
flowScheduler.add(chengshangqixiaRoutineEachFrame());
flowScheduler.add(chengshangqixiaRoutineEnd());
flowScheduler.add(youxi2jieshaoRoutineBegin());
flowScheduler.add(youxi2jieshaoRoutineEachFrame());
flowScheduler.add(youxi2jieshaoRoutineEnd());
flowScheduler.add(anotherwanjiaRoutineBegin());
flowScheduler.add(anotherwanjiaRoutineEachFrame());
flowScheduler.add(anotherwanjiaRoutineEnd());
flowScheduler.add(chouxuanren1RoutineBegin());
flowScheduler.add(chouxuanren1RoutineEachFrame());
flowScheduler.add(chouxuanren1RoutineEnd());
flowScheduler.add(chouzhongjiemian2RoutineBegin());
flowScheduler.add(chouzhongjiemian2RoutineEachFrame());
flowScheduler.add(chouzhongjiemian2RoutineEnd());
flowScheduler.add(guize1RoutineBegin());
flowScheduler.add(guize1RoutineEachFrame());
flowScheduler.add(guize1RoutineEnd());
flowScheduler.add(guize2RoutineBegin());
flowScheduler.add(guize2RoutineEachFrame());
flowScheduler.add(guize2RoutineEnd());
flowScheduler.add(guize3RoutineBegin());
flowScheduler.add(guize3RoutineEachFrame());
flowScheduler.add(guize3RoutineEnd());
flowScheduler.add(guize4RoutineBegin());
flowScheduler.add(guize4RoutineEachFrame());
flowScheduler.add(guize4RoutineEnd());
flowScheduler.add(guize5RoutineBegin());
flowScheduler.add(guize5RoutineEachFrame());
flowScheduler.add(guize5RoutineEnd());
flowScheduler.add(guize6RoutineBegin());
flowScheduler.add(guize6RoutineEachFrame());
flowScheduler.add(guize6RoutineEnd());
flowScheduler.add(guize7RoutineBegin());
flowScheduler.add(guize7RoutineEachFrame());
flowScheduler.add(guize7RoutineEnd());
flowScheduler.add(guize10RoutineBegin());
flowScheduler.add(guize10RoutineEachFrame());
flowScheduler.add(guize10RoutineEnd());
flowScheduler.add(guize12RoutineBegin());
flowScheduler.add(guize12RoutineEachFrame());
flowScheduler.add(guize12RoutineEnd());
flowScheduler.add(dengdaifenpeiRoutineBegin());
flowScheduler.add(dengdaifenpeiRoutineEachFrame());
flowScheduler.add(dengdaifenpeiRoutineEnd());
flowScheduler.add(fenpeijiemianRoutineBegin());
flowScheduler.add(fenpeijiemianRoutineEachFrame());
flowScheduler.add(fenpeijiemianRoutineEnd());
flowScheduler.add(punishslideRoutineBegin());
flowScheduler.add(punishslideRoutineEachFrame());
flowScheduler.add(punishslideRoutineEnd());
flowScheduler.add(guit2_rateRoutineBegin());
flowScheduler.add(guit2_rateRoutineEachFrame());
flowScheduler.add(guit2_rateRoutineEnd());
flowScheduler.add(gundongfanganRoutineBegin());
flowScheduler.add(gundongfanganRoutineEachFrame());
flowScheduler.add(gundongfanganRoutineEnd());
flowScheduler.add(unfairrateRoutineBegin());
flowScheduler.add(unfairrateRoutineEachFrame());
flowScheduler.add(unfairrateRoutineEnd());
flowScheduler.add(zuihouaRoutineBegin());
flowScheduler.add(zuihouaRoutineEachFrame());
flowScheduler.add(zuihouaRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'randdot/6.png', 'path': 'randdot/6.png'},
    {'name': 'shashin/neijiuchengdu.png', 'path': 'shashin/neijiuchengdu.png'},
    {'name': 'thirdphoto/fenpei_honghuang.PNG', 'path': 'thirdphoto/fenpei_honghuang.PNG'},
    {'name': 'thirdphoto/gun1.PNG', 'path': 'thirdphoto/gun1.PNG'},
    {'name': 'randdot/8.png', 'path': 'randdot/8.png'},
    {'name': 'randdot/9.png', 'path': 'randdot/9.png'},
    {'name': 'thirdphoto/wupei_lanhuang.PNG', 'path': 'thirdphoto/wupei_lanhuang.PNG'},
    {'name': 'thirdphoto/chengfa10.PNG', 'path': 'thirdphoto/chengfa10.PNG'},
    {'name': 'thirdphoto/fenpei_lanhuang.PNG', 'path': 'thirdphoto/fenpei_lanhuang.PNG'},
    {'name': 'thirdphoto/gamer_huang.PNG', 'path': 'thirdphoto/gamer_huang.PNG'},
    {'name': 'thirdphoto/renwu_huang.PNG', 'path': 'thirdphoto/renwu_huang.PNG'},
    {'name': 'thirdphoto/fenpei_huanglan.PNG', 'path': 'thirdphoto/fenpei_huanglan.PNG'},
    {'name': 'thirdphoto/chengfa8.PNG', 'path': 'thirdphoto/chengfa8.PNG'},
    {'name': 'shashin/neijiu.png', 'path': 'shashin/neijiu.png'},
    {'name': 'shashin/practice_end.png', 'path': 'shashin/practice_end.png'},
    {'name': 'randdot/5.png', 'path': 'randdot/5.png'},
    {'name': 'thirdphoto/wupei_honghuang.PNG', 'path': 'thirdphoto/wupei_honghuang.PNG'},
    {'name': 'randdot/14.png', 'path': 'randdot/14.png'},
    {'name': 'thirdphoto/fanganzhanshi.PNG', 'path': 'thirdphoto/fanganzhanshi.PNG'},
    {'name': 'thirdphoto/wupei_lanhong.PNG', 'path': 'thirdphoto/wupei_lanhong.PNG'},
    {'name': 'thirdphoto/gun2.PNG', 'path': 'thirdphoto/gun2.PNG'},
    {'name': 'thirdphoto/chengfa3.PNG', 'path': 'thirdphoto/chengfa3.PNG'},
    {'name': 'thirdphoto/renwu_lan.PNG', 'path': 'thirdphoto/renwu_lan.PNG'},
    {'name': 'thirdphoto/chengfa12.PNG', 'path': 'thirdphoto/chengfa12.PNG'},
    {'name': 'randdot/4.png', 'path': 'randdot/4.png'},
    {'name': 'thirdphoto/player_zong.PNG', 'path': 'thirdphoto/player_zong.PNG'},
    {'name': 'thirdphoto/wupei_honglan.PNG', 'path': 'thirdphoto/wupei_honglan.PNG'},
    {'name': 'shashin/zhidaoyu.png', 'path': 'shashin/zhidaoyu.png'},
    {'name': 'thirdphoto/gamer_lan.PNG', 'path': 'thirdphoto/gamer_lan.PNG'},
    {'name': 'thirdphoto/wupei_huanglan.PNG', 'path': 'thirdphoto/wupei_huanglan.PNG'},
    {'name': 'thirdphoto/chengfa2.PNG', 'path': 'thirdphoto/chengfa2.PNG'},
    {'name': 'practice.xlsx', 'path': 'practice.xlsx'},
    {'name': 'thirdphoto/player_hui.PNG', 'path': 'thirdphoto/player_hui.PNG'},
    {'name': 'thirdphoto/player_lv.PNG', 'path': 'thirdphoto/player_lv.PNG'},
    {'name': 'randdot/11.png', 'path': 'randdot/11.png'},
    {'name': 'thirdphoto/chengfa5.PNG', 'path': 'thirdphoto/chengfa5.PNG'},
    {'name': 'thirdphoto/fenpei_honglan.PNG', 'path': 'thirdphoto/fenpei_honglan.PNG'},
    {'name': 'randdot/12.png', 'path': 'randdot/12.png'},
    {'name': 'feedbackimage/feedback6.PNG', 'path': 'feedbackimage/feedback6.PNG'},
    {'name': 'shashin/jiance.png', 'path': 'shashin/jiance.png'},
    {'name': 'thirdphoto/chengfa7.PNG', 'path': 'thirdphoto/chengfa7.PNG'},
    {'name': 'thirdphoto/gamer_hong.PNG', 'path': 'thirdphoto/gamer_hong.PNG'},
    {'name': 'thirdphoto/wupei_huanghong.PNG', 'path': 'thirdphoto/wupei_huanghong.PNG'},
    {'name': 'thirdphoto/chengfa6.PNG', 'path': 'thirdphoto/chengfa6.PNG'},
    {'name': 'shashin/zuihoune.png', 'path': 'shashin/zuihoune.png'},
    {'name': 'thirdphoto/renwu_hong.PNG', 'path': 'thirdphoto/renwu_hong.PNG'},
    {'name': 'condition.xlsx', 'path': 'condition.xlsx'},
    {'name': 'thirdphoto/chengfa1.PNG', 'path': 'thirdphoto/chengfa1.PNG'},
    {'name': 'thirdphoto/chengfa4.PNG', 'path': 'thirdphoto/chengfa4.PNG'},
    {'name': 'randdot/2.png', 'path': 'randdot/2.png'},
    {'name': 'randdot/13.png', 'path': 'randdot/13.png'},
    {'name': 'thirdphoto/gun3.PNG', 'path': 'thirdphoto/gun3.PNG'},
    {'name': 'thirdphoto/fenpei_lanhong.PNG', 'path': 'thirdphoto/fenpei_lanhong.PNG'},
    {'name': 'thirdphoto/neijiu2_huang.PNG', 'path': 'thirdphoto/neijiu2_huang.PNG'},
    {'name': 'randdot/7.png', 'path': 'randdot/7.png'},
    {'name': 'thirdphoto/fenpei_huanghong.PNG', 'path': 'thirdphoto/fenpei_huanghong.PNG'},
    {'name': 'thirdphoto/okbutton.png', 'path': 'thirdphoto/okbutton.png'},
    {'name': 'thirdphoto/TPPguize.png', 'path': 'thirdphoto/TPPguize.png'},
    {'name': 'shashin/chosecolor.png', 'path': 'shashin/chosecolor.png'},
    {'name': 'thirdphoto/neijiu2_lan.PNG', 'path': 'thirdphoto/neijiu2_lan.PNG'},
    {'name': 'randdot/3.png', 'path': 'randdot/3.png'},
    {'name': 'randdot/10.png', 'path': 'randdot/10.png'},
    {'name': 'thirdphoto/chengfa11.PNG', 'path': 'thirdphoto/chengfa11.PNG'},
    {'name': 'thirdphoto/chengfa9.PNG', 'path': 'thirdphoto/chengfa9.PNG'},
    {'name': 'thirdphoto/neijiu2_hong.PNG', 'path': 'thirdphoto/neijiu2_hong.PNG'},
    {'name': 'thirdphoto/bugongpingchengdu.PNG', 'path': 'thirdphoto/bugongpingchengdu.PNG'},
    {'name': 'randdot/1.png', 'path': 'randdot/1.png'},
    {'name': 'feedbackimage/feedback5.PNG', 'path': 'feedbackimage/feedback5.PNG'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var frameDur;
async function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.2.3';
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


var practiceClock;
var image123;
var key_resp;
var fixationClock;
var polygon;
var trail1Clock;
var randomdot_2;
var more_2;
var less_2;
var dot_resp_2;
var F_2;
var J_2;
var redcircle_2;
var number_2;
var feedback1Clock;
var image_3;
var practiceendClock;
var img_practice_end;
var key_resp_2;
var chouhaoClock;
var selectedcolor;
var image_4;
var key_resp_3;
var nichengfenpeiClock;
var image_8;
var text_7;
var text;
var pipeiClock;
var text_5;
var chengongClock;
var playerlist;
var image_9;
var text_6;
var startClock;
var text_3;
var trialClock;
var randomdot;
var more;
var less;
var dot_resp;
var F;
var J;
var redcircle;
var number;
var randblankClock;
var text_12;
var feedback3Clock;
var feedbacklist1;
var feedbacklist2;
var feedcolor1;
var feedcolor2;
var text_4;
var text_8;
var player1_TF;
var player2_TF;
var text_35;
var ITIClock;
var kongping;
var tongjiaClock;
var text_10;
var jieguoneneClock;
var ends_resp;
var image_2;
var guilt1Clock;
var image_5;
var guilt1_ping_5;
var ceshiClock;
var image_6;
var wanjia_name_6;
var chengshangqixiaClock;
var text_2;
var youxi2jieshaoClock;
var text_11;
var anotherwanjiaClock;
var image_7;
var text_16;
var chouxuanren1Clock;
var text_13;
var text_23;
var text_17;
var chouzhongjiemian2Clock;
var text_14;
var text_18;
var text_19;
var text_20;
var text_21;
var key_resp_10;
var guize1Clock;
var image_116;
var key_resp_111;
var guize2Clock;
var image_117;
var key_resp_112;
var guize3Clock;
var image_118;
var key_resp_113;
var guize4Clock;
var image_119;
var key_resp_114;
var guize5Clock;
var image_120;
var key_resp_115;
var guize6Clock;
var image_121;
var key_resp_116;
var guize7Clock;
var image_122;
var image_123;
var image_124;
var key_resp_117;
var guize10Clock;
var image_125;
var key_resp_118;
var guize12Clock;
var image_126;
var image_127;
var key_resp_119;
var dengdaifenpeiClock;
var text_15;
var text_22;
var text_25;
var fenpeijiemianClock;
var image_11;
var text_26;
var text_27;
var key_resp_9;
var punishslideClock;
var image_12;
var slider;
var image_13;
var mouse;
var text_29;
var text_30;
var text_31;
var text_32;
var text_28;
var text_33;
var text_34;
var guit2_rateClock;
var huobanchengxina_15;
var houceguilt2_rate;
var gundongfanganClock;
var image_131;
var image_128;
var image_129;
var image_130;
var unfairrateClock;
var image_14;
var unfair_rate;
var zuihouaClock;
var key_resp_7;
var zuihounene;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "practice"
  practiceClock = new util.Clock();
  image123 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image123', units : undefined, 
    image : 'shashin/zhidaoyu.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [2, 2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "fixation"
  fixationClock = new util.Clock();
  polygon = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon', units : 'height', 
    vertices: 'cross', size:[0.05, 0.05],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('black'),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  // Initialize components for Routine "trail1"
  trail1Clock = new util.Clock();
  randomdot_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'randomdot_2', units : 'norm', 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [2, 2],
    color : new util.Color('white'), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  more_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'more_2',
    text: '大于',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.5)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  less_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'less_2',
    text: '小于',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.5)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  dot_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  F_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'F_2',
    text: 'F',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.65)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  J_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'J_2',
    text: 'J',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.65)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  redcircle_2 = new visual.Polygon ({
    win: psychoJS.window, name: 'redcircle_2', units : 'height', 
    edges: 4, size:[0.2, 0.2],
    ori: 0.0, pos: [0, 0],
    lineWidth: 5.0, lineColor: new util.Color('red'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -6, interpolate: true,
  });
  
  number_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'number_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.2,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -7.0 
  });
  
  // Initialize components for Routine "feedback1"
  feedback1Clock = new util.Clock();
  image_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_3', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [2, 2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "practiceend"
  practiceendClock = new util.Clock();
  img_practice_end = new visual.ImageStim({
    win : psychoJS.window,
    name : 'img_practice_end', units : 'norm', 
    image : 'shashin/practice_end.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [2, 2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "chouhao"
  chouhaoClock = new util.Clock();
  selectedcolor = "";
  
  image_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_4', units : 'norm', 
    image : 'shashin/chosecolor.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [2, 2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "nichengfenpei"
  nichengfenpeiClock = new util.Clock();
  image_8 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_8', units : 'norm', 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [2, 2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  text_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_7',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '现在我们将为您匹配游戏合作伙伴\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.55)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "pipei"
  pipeiClock = new util.Clock();
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: '匹配中，请稍等…',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "chengong"
  chengongClock = new util.Clock();
  playerlist = ["\u7ea2\u65b9", "\u84dd\u65b9", "\u9ec4\u65b9"];
  
  image_9 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_9', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [2, 2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_6',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.45)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "start"
  startClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: '游戏开始，请做好准备',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  randomdot = new visual.ImageStim({
    win : psychoJS.window,
    name : 'randomdot', units : 'norm', 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [2, 2],
    color : new util.Color('white'), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  more = new visual.TextStim({
    win: psychoJS.window,
    name: 'more',
    text: '大于',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.5)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  less = new visual.TextStim({
    win: psychoJS.window,
    name: 'less',
    text: '小于',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.5)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  dot_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  F = new visual.TextStim({
    win: psychoJS.window,
    name: 'F',
    text: 'F',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.65)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  J = new visual.TextStim({
    win: psychoJS.window,
    name: 'J',
    text: 'J',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.65)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  redcircle = new visual.Polygon ({
    win: psychoJS.window, name: 'redcircle', units : 'height', 
    edges: 4, size:[0.2, 0.2],
    ori: 0.0, pos: [0, 0],
    lineWidth: 5.0, lineColor: new util.Color('red'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -6, interpolate: true,
  });
  
  number = new visual.TextStim({
    win: psychoJS.window,
    name: 'number',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.2,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -7.0 
  });
  
  // Initialize components for Routine "randblank"
  randblankClock = new util.Clock();
  text_12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_12',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "feedback3"
  feedback3Clock = new util.Clock();
  feedbacklist1 = ["\u9519\u8bef", "\u9519\u8bef", "\u9519\u8bef", "\u6b63\u786e", "\u9519\u8bef", "\u6b63\u786e", "\u6b63\u786e", "\u9519\u8bef", "\u6b63\u786e", "\u9519\u8bef", "\u9519\u8bef", "\u9519\u8bef"];
  feedbacklist2 = ["\u6b63\u786e", "\u6b63\u786e", "\u6b63\u786e", "\u6b63\u786e", "\u6b63\u786e", "\u9519\u8bef", "\u6b63\u786e", "\u6b63\u786e", "\u9519\u8bef", "\u9519\u8bef", "\u6b63\u786e", "\u6b63\u786e"];
  feedcolor1 = "";
  feedcolor2 = "";
  
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.125), 0.1], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_8',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.15), (- 0.1)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  player1_TF = new visual.TextStim({
    win: psychoJS.window,
    name: 'player1_TF',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.2, 0.1], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  player2_TF = new visual.TextStim({
    win: psychoJS.window,
    name: 'player2_TF',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.2, (- 0.1)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  text_35 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_35',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "ITI"
  ITIClock = new util.Clock();
  kongping = new visual.TextStim({
    win: psychoJS.window,
    name: 'kongping',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "tongjia"
  tongjiaClock = new util.Clock();
  text_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_10',
    text: '请稍等，系统正在统计双方结果。',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "jieguonene"
  jieguoneneClock = new util.Clock();
  ends_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2', units : undefined, 
    image : 'shashin/neijiu.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [2, 2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "guilt1"
  guilt1Clock = new util.Clock();
  image_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_5', units : undefined, 
    image : 'shashin/neijiuchengdu.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [2, 2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  guilt1_ping_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ceshi"
  ceshiClock = new util.Clock();
  image_6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_6', units : undefined, 
    image : 'shashin/jiance.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [2, 2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  wanjia_name_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "chengshangqixia"
  chengshangqixiaClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: '即将进入第二个阶段的游戏\n\n      请做好准备',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "youxi2jieshao"
  youxi2jieshaoClock = new util.Clock();
  text_11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_11',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "anotherwanjia"
  anotherwanjiaClock = new util.Clock();
  image_7 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_7', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [2, 2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  text_16 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_16',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.25)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "chouxuanren1"
  chouxuanren1Clock = new util.Clock();
  text_13 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_13',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.2], height: 0.08,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_23 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_23',
    text: '抽取2名玩家参与一项金钱分配游戏',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.08,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_17 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_17',
    text: '由于此游戏只有2个角色，因此每位玩家抽中的概率是2/3',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.08,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "chouzhongjiemian2"
  chouzhongjiemian2Clock = new util.Clock();
  text_14 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_14',
    text: '抽中金钱分配游戏的玩家为：\n\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.25], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_18 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_18',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_19 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_19',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.1)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  text_20 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_20',
    text: '未抽中的玩家请按Q键退出本界面',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.35)], height: 0.08,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  text_21 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_21',
    text: '抽中游戏的玩家请按空格键进入游戏规则界面',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.5)], height: 0.08,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  key_resp_10 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "guize1"
  guize1Clock = new util.Clock();
  image_116 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_116', units : undefined, 
    image : 'thirdphoto/chengfa1.PNG', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [2, 2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_resp_111 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "guize2"
  guize2Clock = new util.Clock();
  image_117 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_117', units : undefined, 
    image : 'thirdphoto/chengfa2.PNG', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [2, 2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_resp_112 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "guize3"
  guize3Clock = new util.Clock();
  image_118 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_118', units : undefined, 
    image : 'thirdphoto/chengfa3.PNG', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [2, 2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_resp_113 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "guize4"
  guize4Clock = new util.Clock();
  image_119 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_119', units : undefined, 
    image : 'thirdphoto/chengfa4.PNG', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [2, 2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_resp_114 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "guize5"
  guize5Clock = new util.Clock();
  image_120 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_120', units : undefined, 
    image : 'thirdphoto/chengfa5.PNG', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [2, 2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_resp_115 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "guize6"
  guize6Clock = new util.Clock();
  image_121 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_121', units : undefined, 
    image : 'thirdphoto/chengfa6.PNG', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [2, 2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_resp_116 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "guize7"
  guize7Clock = new util.Clock();
  image_122 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_122', units : undefined, 
    image : 'thirdphoto/chengfa7.PNG', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [2, 2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  image_123 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_123', units : undefined, 
    image : 'thirdphoto/chengfa8.PNG', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [2, 2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  image_124 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_124', units : undefined, 
    image : 'thirdphoto/chengfa9.PNG', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [2, 2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  key_resp_117 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "guize10"
  guize10Clock = new util.Clock();
  image_125 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_125', units : undefined, 
    image : 'thirdphoto/chengfa10.PNG', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [2, 2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_resp_118 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "guize12"
  guize12Clock = new util.Clock();
  image_126 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_126', units : undefined, 
    image : 'thirdphoto/chengfa11.PNG', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [2, 2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  image_127 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_127', units : undefined, 
    image : 'thirdphoto/chengfa12.PNG', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [2, 2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  key_resp_119 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "dengdaifenpei"
  dengdaifenpeiClock = new util.Clock();
  text_15 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_15',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], height: 0.08,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_22 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_22',
    text: '系统将给您呈现分配者方案，',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.1)], height: 0.08,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_25 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_25',
    text: '您的惩罚与否只会影响到分配者的最终收益',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.08,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "fenpeijiemian"
  fenpeijiemianClock = new util.Clock();
  image_11 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_11', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [2, 2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  text_26 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_26',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.4), (- 0.15)], height: 0.07,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_27 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_27',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, (- 0.15)], height: 0.07,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_9 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "punishslide"
  punishslideClock = new util.Clock();
  image_12 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_12', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [2, 2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  slider = new visual.Slider({
    win: psychoJS.window, name: 'slider',
    size: [0.8, 0.07], pos: [0, (- 0.65)], units: 'norm',
    labels: ["1", "10", "20", "30"], ticks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    granularity: 1.0, style: ["SLIDER"],
    color: new util.Color('black'), markerColor: new util.Color([0.0039, 0.0039, 0.0039]), lineColor: new util.Color('black'), 
    fontFamily: 'Open Sans', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  image_13 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_13', units : undefined, 
    image : 'thirdphoto/okbutton.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.85)], size : [0.1, 0.1],
    color : new util.Color('white'), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  text_29 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_29',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.15, (- 0.45)], height: 0.06,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -6.0 
  });
  
  text_30 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_30',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.15, (- 0.55)], height: 0.06,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -7.0 
  });
  
  text_31 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_31',
    text: '你付出的金币为:',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.05), (- 0.45)], height: 0.06,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -8.0 
  });
  
  text_32 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_32',
    text: '惩罚分配者的金额为:',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.1), (- 0.55)], height: 0.06,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -9.0 
  });
  
  text_28 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_28',
    text: '请使用鼠标拖动滑动条，选择惩罚的金额\n  拖动好后，请点击ok进入下一界面',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.06,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -10.0 
  });
  
  text_33 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_33',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.4), (- 0.15)], height: 0.07,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -11.0 
  });
  
  text_34 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_34',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, (- 0.15)], height: 0.07,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -12.0 
  });
  
  // Initialize components for Routine "guit2_rate"
  guit2_rateClock = new util.Clock();
  huobanchengxina_15 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'huobanchengxina_15', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [2, 2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  houceguilt2_rate = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "gundongfangan"
  gundongfanganClock = new util.Clock();
  image_131 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_131', units : undefined, 
    image : 'thirdphoto/fanganzhanshi.PNG', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [2, 2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  image_128 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_128', units : undefined, 
    image : 'thirdphoto/gun1.PNG', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [2, 2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  image_129 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_129', units : undefined, 
    image : 'thirdphoto/gun2.PNG', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [2, 2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  image_130 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_130', units : undefined, 
    image : 'thirdphoto/gun3.PNG', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [2, 2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  // Initialize components for Routine "unfairrate"
  unfairrateClock = new util.Clock();
  image_14 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_14', units : undefined, 
    image : 'thirdphoto/bugongpingchengdu.PNG', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [2, 2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  unfair_rate = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "zuihoua"
  zuihouaClock = new util.Clock();
  key_resp_7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  zuihounene = new visual.ImageStim({
    win : psychoJS.window,
    name : 'zuihounene', units : undefined, 
    image : 'shashin/zuihoune.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [2, 2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var trials_2;
var currentLoop;
function trials_2LoopBegin(trials_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 100, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_2'
    });
    psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
    currentLoop = trials_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_2 of trials_2) {
      const snapshot = trials_2.getSnapshot();
      trials_2LoopScheduler.add(importConditions(snapshot));
      trials_2LoopScheduler.add(practiceRoutineBegin(snapshot));
      trials_2LoopScheduler.add(practiceRoutineEachFrame());
      trials_2LoopScheduler.add(practiceRoutineEnd());
      const practice_1LoopScheduler = new Scheduler(psychoJS);
      trials_2LoopScheduler.add(practice_1LoopBegin(practice_1LoopScheduler, snapshot));
      trials_2LoopScheduler.add(practice_1LoopScheduler);
      trials_2LoopScheduler.add(practice_1LoopEnd);
      trials_2LoopScheduler.add(practiceendRoutineBegin(snapshot));
      trials_2LoopScheduler.add(practiceendRoutineEachFrame());
      trials_2LoopScheduler.add(practiceendRoutineEnd());
      trials_2LoopScheduler.add(endLoopIteration(trials_2LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var practice_1;
function practice_1LoopBegin(practice_1LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    practice_1 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'practice.xlsx',
      seed: undefined, name: 'practice_1'
    });
    psychoJS.experiment.addLoop(practice_1); // add the loop to the experiment
    currentLoop = practice_1;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPractice_1 of practice_1) {
      const snapshot = practice_1.getSnapshot();
      practice_1LoopScheduler.add(importConditions(snapshot));
      practice_1LoopScheduler.add(fixationRoutineBegin(snapshot));
      practice_1LoopScheduler.add(fixationRoutineEachFrame());
      practice_1LoopScheduler.add(fixationRoutineEnd());
      practice_1LoopScheduler.add(trail1RoutineBegin(snapshot));
      practice_1LoopScheduler.add(trail1RoutineEachFrame());
      practice_1LoopScheduler.add(trail1RoutineEnd());
      practice_1LoopScheduler.add(feedback1RoutineBegin(snapshot));
      practice_1LoopScheduler.add(feedback1RoutineEachFrame());
      practice_1LoopScheduler.add(feedback1RoutineEnd());
      practice_1LoopScheduler.add(endLoopIteration(practice_1LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function practice_1LoopEnd() {
  psychoJS.experiment.removeLoop(practice_1);

  return Scheduler.Event.NEXT;
}


async function trials_2LoopEnd() {
  psychoJS.experiment.removeLoop(trials_2);

  return Scheduler.Event.NEXT;
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'condition.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      const snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(fixationRoutineBegin(snapshot));
      trialsLoopScheduler.add(fixationRoutineEachFrame());
      trialsLoopScheduler.add(fixationRoutineEnd());
      trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineEnd());
      trialsLoopScheduler.add(randblankRoutineBegin(snapshot));
      trialsLoopScheduler.add(randblankRoutineEachFrame());
      trialsLoopScheduler.add(randblankRoutineEnd());
      trialsLoopScheduler.add(feedback3RoutineBegin(snapshot));
      trialsLoopScheduler.add(feedback3RoutineEachFrame());
      trialsLoopScheduler.add(feedback3RoutineEnd());
      trialsLoopScheduler.add(ITIRoutineBegin(snapshot));
      trialsLoopScheduler.add(ITIRoutineEachFrame());
      trialsLoopScheduler.add(ITIRoutineEnd());
      trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _key_resp_allKeys;
var practiceComponents;
function practiceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'practice'-------
    t = 0;
    practiceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    practiceComponents = [];
    practiceComponents.push(image123);
    practiceComponents.push(key_resp);
    
    for (const thisComponent of practiceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function practiceRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'practice'-------
    // get current time
    t = practiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image123* updates
    if (t >= 0.0 && image123.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image123.tStart = t;  // (not accounting for frame time here)
      image123.frameNStart = frameN;  // exact frame index
      
      image123.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
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
    for (const thisComponent of practiceComponents)
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


function practiceRoutineEnd() {
  return async function () {
    //------Ending Routine 'practice'-------
    for (const thisComponent of practiceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "practice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var fixationComponents;
function fixationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'fixation'-------
    t = 0;
    fixationClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    fixationComponents = [];
    fixationComponents.push(polygon);
    
    for (const thisComponent of fixationComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function fixationRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'fixation'-------
    // get current time
    t = fixationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon* updates
    if (t >= 0.0 && polygon.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon.tStart = t;  // (not accounting for frame time here)
      polygon.frameNStart = frameN;  // exact frame index
      
      polygon.setAutoDraw(true);
    }

    frameRemains = 0.0 + (0.5 + (0.3 * Math.random())) - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (polygon.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon.setAutoDraw(false);
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
    for (const thisComponent of fixationComponents)
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


function fixationRoutineEnd() {
  return async function () {
    //------Ending Routine 'fixation'-------
    for (const thisComponent of fixationComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "fixation" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _dot_resp_2_allKeys;
var trail1Components;
function trail1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'trail1'-------
    t = 0;
    trail1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    randomdot_2.setImage(imagefile1);
    dot_resp_2.keys = undefined;
    dot_resp_2.rt = undefined;
    _dot_resp_2_allKeys = [];
    number_2.setText(dotnum1);
    // keep track of which components have finished
    trail1Components = [];
    trail1Components.push(randomdot_2);
    trail1Components.push(more_2);
    trail1Components.push(less_2);
    trail1Components.push(dot_resp_2);
    trail1Components.push(F_2);
    trail1Components.push(J_2);
    trail1Components.push(redcircle_2);
    trail1Components.push(number_2);
    
    for (const thisComponent of trail1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trail1RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'trail1'-------
    // get current time
    t = trail1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *randomdot_2* updates
    if (t >= 0.0 && randomdot_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      randomdot_2.tStart = t;  // (not accounting for frame time here)
      randomdot_2.frameNStart = frameN;  // exact frame index
      
      randomdot_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (randomdot_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      randomdot_2.setAutoDraw(false);
    }
    
    // *more_2* updates
    if (t >= 1.5 && more_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      more_2.tStart = t;  // (not accounting for frame time here)
      more_2.frameNStart = frameN;  // exact frame index
      
      more_2.setAutoDraw(true);
    }

    
    // *less_2* updates
    if (t >= 1.5 && less_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      less_2.tStart = t;  // (not accounting for frame time here)
      less_2.frameNStart = frameN;  // exact frame index
      
      less_2.setAutoDraw(true);
    }

    
    // *dot_resp_2* updates
    if (t >= 1.5 && dot_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dot_resp_2.tStart = t;  // (not accounting for frame time here)
      dot_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { dot_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { dot_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { dot_resp_2.clearEvents(); });
    }

    if (dot_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = dot_resp_2.getKeys({keyList: ['f', 'j'], waitRelease: false});
      _dot_resp_2_allKeys = _dot_resp_2_allKeys.concat(theseKeys);
      if (_dot_resp_2_allKeys.length > 0) {
        dot_resp_2.keys = _dot_resp_2_allKeys[_dot_resp_2_allKeys.length - 1].name;  // just the last key pressed
        dot_resp_2.rt = _dot_resp_2_allKeys[_dot_resp_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *F_2* updates
    if (t >= 1.5 && F_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      F_2.tStart = t;  // (not accounting for frame time here)
      F_2.frameNStart = frameN;  // exact frame index
      
      F_2.setAutoDraw(true);
    }

    
    // *J_2* updates
    if (t >= 1.5 && J_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      J_2.tStart = t;  // (not accounting for frame time here)
      J_2.frameNStart = frameN;  // exact frame index
      
      J_2.setAutoDraw(true);
    }

    
    // *redcircle_2* updates
    if (t >= 1.5 && redcircle_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      redcircle_2.tStart = t;  // (not accounting for frame time here)
      redcircle_2.frameNStart = frameN;  // exact frame index
      
      redcircle_2.setAutoDraw(true);
    }

    
    // *number_2* updates
    if (t >= 1.5 && number_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      number_2.tStart = t;  // (not accounting for frame time here)
      number_2.frameNStart = frameN;  // exact frame index
      
      number_2.setAutoDraw(true);
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
    for (const thisComponent of trail1Components)
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


function trail1RoutineEnd() {
  return async function () {
    //------Ending Routine 'trail1'-------
    for (const thisComponent of trail1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('dot_resp_2.keys', dot_resp_2.keys);
    if (typeof dot_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('dot_resp_2.rt', dot_resp_2.rt);
        routineTimer.reset();
        }
    
    dot_resp_2.stop();
    // the Routine "trail1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var feedback1Components;
function feedback1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'feedback1'-------
    t = 0;
    feedback1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.500000);
    // update component parameters for each repeat
    image_3.setImage(feedbacktext1);
    // keep track of which components have finished
    feedback1Components = [];
    feedback1Components.push(image_3);
    
    for (const thisComponent of feedback1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function feedback1RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'feedback1'-------
    // get current time
    t = feedback1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_3* updates
    if (t >= 0.0 && image_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_3.tStart = t;  // (not accounting for frame time here)
      image_3.frameNStart = frameN;  // exact frame index
      
      image_3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_3.setAutoDraw(false);
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
    for (const thisComponent of feedback1Components)
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


function feedback1RoutineEnd() {
  return async function () {
    //------Ending Routine 'feedback1'-------
    for (const thisComponent of feedback1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_2_allKeys;
var practiceendComponents;
function practiceendRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'practiceend'-------
    t = 0;
    practiceendClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    practiceendComponents = [];
    practiceendComponents.push(img_practice_end);
    practiceendComponents.push(key_resp_2);
    
    for (const thisComponent of practiceendComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function practiceendRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'practiceend'-------
    // get current time
    t = practiceendClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *img_practice_end* updates
    if (t >= 0.0 && img_practice_end.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img_practice_end.tStart = t;  // (not accounting for frame time here)
      img_practice_end.frameNStart = frameN;  // exact frame index
      
      img_practice_end.setAutoDraw(true);
    }

    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }

    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['space', 'p'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
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
    for (const thisComponent of practiceendComponents)
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


function practiceendRoutineEnd() {
  return async function () {
    //------Ending Routine 'practiceend'-------
    for (const thisComponent of practiceendComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    if ((key_resp_2.keys === "space")) {
        trials_2.finished = 1;
    }
    
    // the Routine "practiceend" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_3_allKeys;
var chouhaoComponents;
function chouhaoRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'chouhao'-------
    t = 0;
    chouhaoClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    // keep track of which components have finished
    chouhaoComponents = [];
    chouhaoComponents.push(image_4);
    chouhaoComponents.push(key_resp_3);
    
    for (const thisComponent of chouhaoComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function chouhaoRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'chouhao'-------
    // get current time
    t = chouhaoClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_4* updates
    if (t >= 0.0 && image_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_4.tStart = t;  // (not accounting for frame time here)
      image_4.frameNStart = frameN;  // exact frame index
      
      image_4.setAutoDraw(true);
    }

    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }

    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['1', '2', '3'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
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
    for (const thisComponent of chouhaoComponents)
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


function chouhaoRoutineEnd() {
  return async function () {
    //------Ending Routine 'chouhao'-------
    for (const thisComponent of chouhaoComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if ((key_resp_3.keys === "1")) {
        selectedcolor = "\u7070\u65b9";
    } else {
        if ((key_resp_3.keys === "2")) {
            selectedcolor = "\u7eff\u65b9";
        } else {
            selectedcolor = "\u68d5\u65b9";
        }
    }
    psychoJS.experiment.addData("selectedcolor", selectedcolor);
    
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        routineTimer.reset();
        }
    
    key_resp_3.stop();
    // the Routine "chouhao" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var numdisplay;
var selectedpic;
var nichengfenpeiComponents;
function nichengfenpeiRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'nichengfenpei'-------
    t = 0;
    nichengfenpeiClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(3.000000);
    // update component parameters for each repeat
    numdisplay = ("\u60a8\u4e3a\u81ea\u5df1\u9009\u62e9\u7684\u6635\u79f0\u4e3a\uff1a" + selectedcolor);
    if ((selectedcolor === "\u7070\u65b9")) {
        selectedpic = "thirdphoto/player_hui.PNG";
    } else {
        if ((selectedcolor === "\u7eff\u65b9")) {
            selectedpic = "thirdphoto/player_lv.PNG";
        } else {
            selectedpic = "thirdphoto/player_zong.PNG";
        }
    }
    
    image_8.setImage(selectedpic);
    text_7.setText(numdisplay);
    // keep track of which components have finished
    nichengfenpeiComponents = [];
    nichengfenpeiComponents.push(image_8);
    nichengfenpeiComponents.push(text_7);
    nichengfenpeiComponents.push(text);
    
    for (const thisComponent of nichengfenpeiComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function nichengfenpeiRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'nichengfenpei'-------
    // get current time
    t = nichengfenpeiClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_8* updates
    if (t >= 0.0 && image_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_8.tStart = t;  // (not accounting for frame time here)
      image_8.frameNStart = frameN;  // exact frame index
      
      image_8.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_8.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_8.setAutoDraw(false);
    }
    
    // *text_7* updates
    if (t >= 0.0 && text_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_7.tStart = t;  // (not accounting for frame time here)
      text_7.frameNStart = frameN;  // exact frame index
      
      text_7.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_7.setAutoDraw(false);
    }
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text.setAutoDraw(false);
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
    for (const thisComponent of nichengfenpeiComponents)
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


function nichengfenpeiRoutineEnd() {
  return async function () {
    //------Ending Routine 'nichengfenpei'-------
    for (const thisComponent of nichengfenpeiComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var pipeiComponents;
function pipeiRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'pipei'-------
    t = 0;
    pipeiClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    pipeiComponents = [];
    pipeiComponents.push(text_5);
    
    for (const thisComponent of pipeiComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function pipeiRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'pipei'-------
    // get current time
    t = pipeiClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_5* updates
    if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }

    frameRemains = 0.0 + (2 + (1.6 * Math.random())) - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_5.setAutoDraw(false);
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
    for (const thisComponent of pipeiComponents)
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


function pipeiRoutineEnd() {
  return async function () {
    //------Ending Routine 'pipei'-------
    for (const thisComponent of pipeiComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "pipei" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var randfake;
var randplayer1;
var randplayer;
var fakepic;
var chengongComponents;
function chengongRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'chengong'-------
    t = 0;
    chengongClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.500000);
    // update component parameters for each repeat
    util.shuffle(playerlist);
    randfake = playerlist.pop();
    psychoJS.experiment.addData("randfake", randfake);
    randplayer1 = ("\u5339\u914d\u6210\u529f\n\n\u60a8\u5c06\u4e0e[" + randfake.toString());
    randplayer = (randplayer1 + "\u73a9\u5bb6]\u5171\u540c\u5b8c\u6210\u6e38\u620f\n\n\u6e38\u620f\u5373\u5c06\u5f00\u59cb\uff0c\u8bf7\u505a\u597d\u51c6\u5907");
    if ((randfake === "\u7ea2\u65b9")) {
        fakepic = "thirdphoto/gamer_hong.PNG";
    } else {
        if ((randfake === "\u9ec4\u65b9")) {
            fakepic = "thirdphoto/gamer_huang.PNG";
        } else {
            fakepic = "thirdphoto/gamer_lan.PNG";
        }
    }
    
    image_9.setImage(fakepic);
    text_6.setText(randplayer);
    // keep track of which components have finished
    chengongComponents = [];
    chengongComponents.push(image_9);
    chengongComponents.push(text_6);
    
    for (const thisComponent of chengongComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function chengongRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'chengong'-------
    // get current time
    t = chengongClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_9* updates
    if (t >= 0.0 && image_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_9.tStart = t;  // (not accounting for frame time here)
      image_9.frameNStart = frameN;  // exact frame index
      
      image_9.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_9.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_9.setAutoDraw(false);
    }
    
    // *text_6* updates
    if (t >= 0.0 && text_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_6.tStart = t;  // (not accounting for frame time here)
      text_6.frameNStart = frameN;  // exact frame index
      
      text_6.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_6.setAutoDraw(false);
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
    for (const thisComponent of chengongComponents)
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


function chengongRoutineEnd() {
  return async function () {
    //------Ending Routine 'chengong'-------
    for (const thisComponent of chengongComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var startComponents;
function startRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'start'-------
    t = 0;
    startClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    startComponents = [];
    startComponents.push(text_3);
    
    for (const thisComponent of startComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function startRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'start'-------
    // get current time
    t = startClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_3.setAutoDraw(false);
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
    for (const thisComponent of startComponents)
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


function startRoutineEnd() {
  return async function () {
    //------Ending Routine 'start'-------
    for (const thisComponent of startComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var _dot_resp_allKeys;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    randomdot.setImage(imagefile);
    dot_resp.keys = undefined;
    dot_resp.rt = undefined;
    _dot_resp_allKeys = [];
    number.setText(dotnum);
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(randomdot);
    trialComponents.push(more);
    trialComponents.push(less);
    trialComponents.push(dot_resp);
    trialComponents.push(F);
    trialComponents.push(J);
    trialComponents.push(redcircle);
    trialComponents.push(number);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trialRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'trial'-------
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *randomdot* updates
    if (t >= 0.0 && randomdot.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      randomdot.tStart = t;  // (not accounting for frame time here)
      randomdot.frameNStart = frameN;  // exact frame index
      
      randomdot.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (randomdot.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      randomdot.setAutoDraw(false);
    }
    
    // *more* updates
    if (t >= 1.5 && more.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      more.tStart = t;  // (not accounting for frame time here)
      more.frameNStart = frameN;  // exact frame index
      
      more.setAutoDraw(true);
    }

    
    // *less* updates
    if (t >= 1.5 && less.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      less.tStart = t;  // (not accounting for frame time here)
      less.frameNStart = frameN;  // exact frame index
      
      less.setAutoDraw(true);
    }

    
    // *dot_resp* updates
    if (t >= 1.5 && dot_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dot_resp.tStart = t;  // (not accounting for frame time here)
      dot_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { dot_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { dot_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { dot_resp.clearEvents(); });
    }

    if (dot_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = dot_resp.getKeys({keyList: ['f', 'j'], waitRelease: false});
      _dot_resp_allKeys = _dot_resp_allKeys.concat(theseKeys);
      if (_dot_resp_allKeys.length > 0) {
        dot_resp.keys = _dot_resp_allKeys[_dot_resp_allKeys.length - 1].name;  // just the last key pressed
        dot_resp.rt = _dot_resp_allKeys[_dot_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *F* updates
    if (t >= 1.5 && F.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      F.tStart = t;  // (not accounting for frame time here)
      F.frameNStart = frameN;  // exact frame index
      
      F.setAutoDraw(true);
    }

    
    // *J* updates
    if (t >= 1.5 && J.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      J.tStart = t;  // (not accounting for frame time here)
      J.frameNStart = frameN;  // exact frame index
      
      J.setAutoDraw(true);
    }

    
    // *redcircle* updates
    if (t >= 1.5 && redcircle.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      redcircle.tStart = t;  // (not accounting for frame time here)
      redcircle.frameNStart = frameN;  // exact frame index
      
      redcircle.setAutoDraw(true);
    }

    
    // *number* updates
    if (t >= 1.5 && number.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      number.tStart = t;  // (not accounting for frame time here)
      number.frameNStart = frameN;  // exact frame index
      
      number.setAutoDraw(true);
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
    for (const thisComponent of trialComponents)
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


function trialRoutineEnd() {
  return async function () {
    //------Ending Routine 'trial'-------
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('dot_resp.keys', dot_resp.keys);
    if (typeof dot_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('dot_resp.rt', dot_resp.rt);
        routineTimer.reset();
        }
    
    dot_resp.stop();
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var randblankComponents;
function randblankRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'randblank'-------
    t = 0;
    randblankClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    text_12.setText('');
    // keep track of which components have finished
    randblankComponents = [];
    randblankComponents.push(text_12);
    
    for (const thisComponent of randblankComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function randblankRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'randblank'-------
    // get current time
    t = randblankClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_12* updates
    if (t >= 0.0 && text_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_12.tStart = t;  // (not accounting for frame time here)
      text_12.frameNStart = frameN;  // exact frame index
      
      text_12.setAutoDraw(true);
    }

    frameRemains = 0.0 + (0.5 + (3 * Math.random())) - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_12.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_12.setAutoDraw(false);
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
    for (const thisComponent of randblankComponents)
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


function randblankRoutineEnd() {
  return async function () {
    //------Ending Routine 'randblank'-------
    for (const thisComponent of randblankComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "randblank" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var thisfeedback1;
var thisfeedback2;
var realfeed11;
var realfeed1;
var realfeed22;
var realfeed2;
var getcoin;
var feedback3Components;
function feedback3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'feedback3'-------
    t = 0;
    feedback3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.500000);
    // update component parameters for each repeat
    thisfeedback1 = feedbacklist1.pop();
    thisfeedback2 = feedbacklist2.pop();
    psychoJS.experiment.addData("thisfeedback1", thisfeedback1);
    psychoJS.experiment.addData("thisfeedback2", thisfeedback2);
    if ((thisfeedback1 === "\u6b63\u786e")) {
        feedcolor1 = "green";
    } else {
        feedcolor1 = "red";
    }
    if ((thisfeedback2 === "\u6b63\u786e")) {
        feedcolor2 = "green";
    } else {
        feedcolor2 = "red";
    }
    realfeed11 = ("\u60a8[" + selectedcolor.toString());
    realfeed1 = (realfeed11 + "\u73a9\u5bb6]\u4f30\u8ba1");
    realfeed22 = ("\u4f19\u4f34[" + randfake.toString());
    realfeed2 = (realfeed22 + "\u73a9\u5bb6]\u4f30\u8ba1");
    if (((thisfeedback1 === "\u6b63\u786e") && (thisfeedback2 === "\u6b63\u786e"))) {
        getcoin = "\u672c\u8f6e\u83b7\u5f975\u4e2a\u91d1\u5e01";
    } else {
        getcoin = "\u672c\u8f6e\u672a\u83b7\u5f97\u91d1\u5e01";
    }
    
    text_4.setText(realfeed1);
    text_8.setText(realfeed2);
    player1_TF.setColor(new util.Color(feedcolor1));
    player1_TF.setText(thisfeedback1);
    player2_TF.setColor(new util.Color(feedcolor2));
    player2_TF.setText(thisfeedback2);
    text_35.setText(getcoin);
    // keep track of which components have finished
    feedback3Components = [];
    feedback3Components.push(text_4);
    feedback3Components.push(text_8);
    feedback3Components.push(player1_TF);
    feedback3Components.push(player2_TF);
    feedback3Components.push(text_35);
    
    for (const thisComponent of feedback3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function feedback3RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'feedback3'-------
    // get current time
    t = feedback3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_4.setAutoDraw(false);
    }
    
    // *text_8* updates
    if (t >= 0.0 && text_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_8.tStart = t;  // (not accounting for frame time here)
      text_8.frameNStart = frameN;  // exact frame index
      
      text_8.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_8.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_8.setAutoDraw(false);
    }
    
    // *player1_TF* updates
    if (t >= 0.0 && player1_TF.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      player1_TF.tStart = t;  // (not accounting for frame time here)
      player1_TF.frameNStart = frameN;  // exact frame index
      
      player1_TF.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (player1_TF.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      player1_TF.setAutoDraw(false);
    }
    
    // *player2_TF* updates
    if (t >= 0.0 && player2_TF.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      player2_TF.tStart = t;  // (not accounting for frame time here)
      player2_TF.frameNStart = frameN;  // exact frame index
      
      player2_TF.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (player2_TF.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      player2_TF.setAutoDraw(false);
    }
    
    // *text_35* updates
    if (t >= 0.0 && text_35.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_35.tStart = t;  // (not accounting for frame time here)
      text_35.frameNStart = frameN;  // exact frame index
      
      text_35.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_35.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_35.setAutoDraw(false);
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
    for (const thisComponent of feedback3Components)
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


function feedback3RoutineEnd() {
  return async function () {
    //------Ending Routine 'feedback3'-------
    for (const thisComponent of feedback3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var ITIComponents;
function ITIRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'ITI'-------
    t = 0;
    ITIClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.800000);
    // update component parameters for each repeat
    // keep track of which components have finished
    ITIComponents = [];
    ITIComponents.push(kongping);
    
    for (const thisComponent of ITIComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ITIRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'ITI'-------
    // get current time
    t = ITIClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *kongping* updates
    if (t >= 0.0 && kongping.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      kongping.tStart = t;  // (not accounting for frame time here)
      kongping.frameNStart = frameN;  // exact frame index
      
      kongping.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (kongping.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      kongping.setAutoDraw(false);
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
    for (const thisComponent of ITIComponents)
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


function ITIRoutineEnd() {
  return async function () {
    //------Ending Routine 'ITI'-------
    for (const thisComponent of ITIComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var tongjiaComponents;
function tongjiaRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'tongjia'-------
    t = 0;
    tongjiaClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(3.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    tongjiaComponents = [];
    tongjiaComponents.push(text_10);
    
    for (const thisComponent of tongjiaComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function tongjiaRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'tongjia'-------
    // get current time
    t = tongjiaClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_10* updates
    if (t >= 0.0 && text_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_10.tStart = t;  // (not accounting for frame time here)
      text_10.frameNStart = frameN;  // exact frame index
      
      text_10.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_10.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_10.setAutoDraw(false);
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
    for (const thisComponent of tongjiaComponents)
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


function tongjiaRoutineEnd() {
  return async function () {
    //------Ending Routine 'tongjia'-------
    for (const thisComponent of tongjiaComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var _ends_resp_allKeys;
var jieguoneneComponents;
function jieguoneneRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'jieguonene'-------
    t = 0;
    jieguoneneClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    ends_resp.keys = undefined;
    ends_resp.rt = undefined;
    _ends_resp_allKeys = [];
    // keep track of which components have finished
    jieguoneneComponents = [];
    jieguoneneComponents.push(ends_resp);
    jieguoneneComponents.push(image_2);
    
    for (const thisComponent of jieguoneneComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function jieguoneneRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'jieguonene'-------
    // get current time
    t = jieguoneneClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *ends_resp* updates
    if (t >= 0.0 && ends_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ends_resp.tStart = t;  // (not accounting for frame time here)
      ends_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { ends_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { ends_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { ends_resp.clearEvents(); });
    }

    if (ends_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = ends_resp.getKeys({keyList: ['space'], waitRelease: false});
      _ends_resp_allKeys = _ends_resp_allKeys.concat(theseKeys);
      if (_ends_resp_allKeys.length > 0) {
        ends_resp.keys = _ends_resp_allKeys[_ends_resp_allKeys.length - 1].name;  // just the last key pressed
        ends_resp.rt = _ends_resp_allKeys[_ends_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *image_2* updates
    if (t >= 0.0 && image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_2.tStart = t;  // (not accounting for frame time here)
      image_2.frameNStart = frameN;  // exact frame index
      
      image_2.setAutoDraw(true);
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
    for (const thisComponent of jieguoneneComponents)
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


function jieguoneneRoutineEnd() {
  return async function () {
    //------Ending Routine 'jieguonene'-------
    for (const thisComponent of jieguoneneComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ends_resp.keys', ends_resp.keys);
    if (typeof ends_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('ends_resp.rt', ends_resp.rt);
        routineTimer.reset();
        }
    
    ends_resp.stop();
    // the Routine "jieguonene" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _guilt1_ping_5_allKeys;
var guilt1Components;
function guilt1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'guilt1'-------
    t = 0;
    guilt1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    guilt1_ping_5.keys = undefined;
    guilt1_ping_5.rt = undefined;
    _guilt1_ping_5_allKeys = [];
    // keep track of which components have finished
    guilt1Components = [];
    guilt1Components.push(image_5);
    guilt1Components.push(guilt1_ping_5);
    
    for (const thisComponent of guilt1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function guilt1RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'guilt1'-------
    // get current time
    t = guilt1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_5* updates
    if (t >= 0.0 && image_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_5.tStart = t;  // (not accounting for frame time here)
      image_5.frameNStart = frameN;  // exact frame index
      
      image_5.setAutoDraw(true);
    }

    
    // *guilt1_ping_5* updates
    if (t >= 0.0 && guilt1_ping_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      guilt1_ping_5.tStart = t;  // (not accounting for frame time here)
      guilt1_ping_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { guilt1_ping_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { guilt1_ping_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { guilt1_ping_5.clearEvents(); });
    }

    if (guilt1_ping_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = guilt1_ping_5.getKeys({keyList: ['1', '2', '3', '4', '5', '6', '7'], waitRelease: false});
      _guilt1_ping_5_allKeys = _guilt1_ping_5_allKeys.concat(theseKeys);
      if (_guilt1_ping_5_allKeys.length > 0) {
        guilt1_ping_5.keys = _guilt1_ping_5_allKeys[_guilt1_ping_5_allKeys.length - 1].name;  // just the last key pressed
        guilt1_ping_5.rt = _guilt1_ping_5_allKeys[_guilt1_ping_5_allKeys.length - 1].rt;
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
    for (const thisComponent of guilt1Components)
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


function guilt1RoutineEnd() {
  return async function () {
    //------Ending Routine 'guilt1'-------
    for (const thisComponent of guilt1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('guilt1_ping_5.keys', guilt1_ping_5.keys);
    if (typeof guilt1_ping_5.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('guilt1_ping_5.rt', guilt1_ping_5.rt);
        routineTimer.reset();
        }
    
    guilt1_ping_5.stop();
    // the Routine "guilt1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _wanjia_name_6_allKeys;
var ceshiComponents;
function ceshiRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'ceshi'-------
    t = 0;
    ceshiClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    wanjia_name_6.keys = undefined;
    wanjia_name_6.rt = undefined;
    _wanjia_name_6_allKeys = [];
    // keep track of which components have finished
    ceshiComponents = [];
    ceshiComponents.push(image_6);
    ceshiComponents.push(wanjia_name_6);
    
    for (const thisComponent of ceshiComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ceshiRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'ceshi'-------
    // get current time
    t = ceshiClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_6* updates
    if (t >= 0.0 && image_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_6.tStart = t;  // (not accounting for frame time here)
      image_6.frameNStart = frameN;  // exact frame index
      
      image_6.setAutoDraw(true);
    }

    
    // *wanjia_name_6* updates
    if (t >= 0.0 && wanjia_name_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      wanjia_name_6.tStart = t;  // (not accounting for frame time here)
      wanjia_name_6.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { wanjia_name_6.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { wanjia_name_6.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { wanjia_name_6.clearEvents(); });
    }

    if (wanjia_name_6.status === PsychoJS.Status.STARTED) {
      let theseKeys = wanjia_name_6.getKeys({keyList: ['1', '2', '3', '4', '5', '6'], waitRelease: false});
      _wanjia_name_6_allKeys = _wanjia_name_6_allKeys.concat(theseKeys);
      if (_wanjia_name_6_allKeys.length > 0) {
        wanjia_name_6.keys = _wanjia_name_6_allKeys[_wanjia_name_6_allKeys.length - 1].name;  // just the last key pressed
        wanjia_name_6.rt = _wanjia_name_6_allKeys[_wanjia_name_6_allKeys.length - 1].rt;
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
    for (const thisComponent of ceshiComponents)
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


function ceshiRoutineEnd() {
  return async function () {
    //------Ending Routine 'ceshi'-------
    for (const thisComponent of ceshiComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('wanjia_name_6.keys', wanjia_name_6.keys);
    if (typeof wanjia_name_6.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('wanjia_name_6.rt', wanjia_name_6.rt);
        routineTimer.reset();
        }
    
    wanjia_name_6.stop();
    // the Routine "ceshi" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var chengshangqixiaComponents;
function chengshangqixiaRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'chengshangqixia'-------
    t = 0;
    chengshangqixiaClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(3.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    chengshangqixiaComponents = [];
    chengshangqixiaComponents.push(text_2);
    
    for (const thisComponent of chengshangqixiaComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function chengshangqixiaRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'chengshangqixia'-------
    // get current time
    t = chengshangqixiaClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_2.setAutoDraw(false);
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
    for (const thisComponent of chengshangqixiaComponents)
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


function chengshangqixiaRoutineEnd() {
  return async function () {
    //------Ending Routine 'chengshangqixia'-------
    for (const thisComponent of chengshangqixiaComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var jieshaotxt1;
var jieshaotxt;
var youxi2jieshaoComponents;
function youxi2jieshaoRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'youxi2jieshao'-------
    t = 0;
    youxi2jieshaoClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(5.500000);
    // update component parameters for each repeat
    jieshaotxt1 = ("\u63a5\u4e0b\u6765\uff0c\u60a8\u548c\u4f30\u8ba1\u6e38\u620f\u7684\u540c\u4f34[" + randfake.toString());
    jieshaotxt = (jieshaotxt1 + "\u73a9\u5bb6]\u5c06\u4e0e\n\n\u53e6\u4e00\u540d\u73a9\u5bb6\u4e00\u8d77\u62bd\u53d6\u91d1\u94b1\u5206\u914d\u6e38\u620f\u4e2d\u7684\u89d2\u8272");
    
    text_11.setText(jieshaotxt);
    // keep track of which components have finished
    youxi2jieshaoComponents = [];
    youxi2jieshaoComponents.push(text_11);
    
    for (const thisComponent of youxi2jieshaoComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function youxi2jieshaoRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'youxi2jieshao'-------
    // get current time
    t = youxi2jieshaoClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_11* updates
    if (t >= 0.0 && text_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_11.tStart = t;  // (not accounting for frame time here)
      text_11.frameNStart = frameN;  // exact frame index
      
      text_11.setAutoDraw(true);
    }

    frameRemains = 0.0 + 5.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_11.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_11.setAutoDraw(false);
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
    for (const thisComponent of youxi2jieshaoComponents)
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


function youxi2jieshaoRoutineEnd() {
  return async function () {
    //------Ending Routine 'youxi2jieshao'-------
    for (const thisComponent of youxi2jieshaoComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var randfake2;
var gamer2txt1;
var gamer2txt2;
var fakepic2;
var anotherwanjiaComponents;
function anotherwanjiaRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'anotherwanjia'-------
    t = 0;
    anotherwanjiaClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    util.shuffle(playerlist);
    randfake2 = playerlist.pop();
    psychoJS.experiment.addData("randfake2", randfake2);
    gamer2txt1 = ("\u53e6\u4e00\u540d\u73a9\u5bb6\u4e3a[" + randfake2.toString());
    gamer2txt2 = (gamer2txt1 + "\u73a9\u5bb6]");
    if ((randfake2 === "\u7ea2\u65b9")) {
        fakepic2 = "thirdphoto/gamer_hong.PNG";
    } else {
        if ((randfake2 === "\u9ec4\u65b9")) {
            fakepic2 = "thirdphoto/gamer_huang.PNG";
        } else {
            fakepic2 = "thirdphoto/gamer_lan.PNG";
        }
    }
    
    image_7.setImage(fakepic2);
    text_16.setText(gamer2txt2);
    // keep track of which components have finished
    anotherwanjiaComponents = [];
    anotherwanjiaComponents.push(image_7);
    anotherwanjiaComponents.push(text_16);
    
    for (const thisComponent of anotherwanjiaComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function anotherwanjiaRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'anotherwanjia'-------
    // get current time
    t = anotherwanjiaClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_7* updates
    if (t >= 0.0 && image_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_7.tStart = t;  // (not accounting for frame time here)
      image_7.frameNStart = frameN;  // exact frame index
      
      image_7.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_7.setAutoDraw(false);
    }
    
    // *text_16* updates
    if (t >= 0.0 && text_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_16.tStart = t;  // (not accounting for frame time here)
      text_16.frameNStart = frameN;  // exact frame index
      
      text_16.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_16.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_16.setAutoDraw(false);
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
    for (const thisComponent of anotherwanjiaComponents)
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


function anotherwanjiaRoutineEnd() {
  return async function () {
    //------Ending Routine 'anotherwanjia'-------
    for (const thisComponent of anotherwanjiaComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var chouxuantxt1;
var chouxuantxt2;
var chouxuantxt3;
var chouxuantxt4;
var chouxuantxt;
var chouxuanren1Components;
function chouxuanren1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'chouxuanren1'-------
    t = 0;
    chouxuanren1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(7.000000);
    // update component parameters for each repeat
    chouxuantxt1 = ("\u73b0\u5728\uff0c\u7cfb\u7edf\u5c06\u4ece[" + selectedcolor.toString());
    chouxuantxt2 = ("\u73a9\u5bb6]\u3001[" + randfake.toString());
    chouxuantxt3 = ("\u73a9\u5bb6]\u3001[" + randfake2.toString());
    chouxuantxt4 = "\u73a9\u5bb6]\u4e2d";
    chouxuantxt = (((chouxuantxt1 + chouxuantxt2) + chouxuantxt3) + chouxuantxt4);
    
    text_13.setText(chouxuantxt);
    // keep track of which components have finished
    chouxuanren1Components = [];
    chouxuanren1Components.push(text_13);
    chouxuanren1Components.push(text_23);
    chouxuanren1Components.push(text_17);
    
    for (const thisComponent of chouxuanren1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function chouxuanren1RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'chouxuanren1'-------
    // get current time
    t = chouxuanren1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_13* updates
    if (t >= 0.0 && text_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_13.tStart = t;  // (not accounting for frame time here)
      text_13.frameNStart = frameN;  // exact frame index
      
      text_13.setAutoDraw(true);
    }

    frameRemains = 0.0 + 7 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_13.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_13.setAutoDraw(false);
    }
    
    // *text_23* updates
    if (t >= 0.0 && text_23.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_23.tStart = t;  // (not accounting for frame time here)
      text_23.frameNStart = frameN;  // exact frame index
      
      text_23.setAutoDraw(true);
    }

    frameRemains = 0.0 + 7 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_23.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_23.setAutoDraw(false);
    }
    
    // *text_17* updates
    if (t >= 0.0 && text_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_17.tStart = t;  // (not accounting for frame time here)
      text_17.frameNStart = frameN;  // exact frame index
      
      text_17.setAutoDraw(true);
    }

    frameRemains = 0.0 + 7 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_17.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_17.setAutoDraw(false);
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
    for (const thisComponent of chouxuanren1Components)
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


function chouxuanren1RoutineEnd() {
  return async function () {
    //------Ending Routine 'chouxuanren1'-------
    for (const thisComponent of chouxuanren1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var chouzhongtxt1;
var chouzhongtxt2;
var _key_resp_10_allKeys;
var chouzhongjiemian2Components;
function chouzhongjiemian2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'chouzhongjiemian2'-------
    t = 0;
    chouzhongjiemian2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    chouzhongtxt1 = (randfake.toString() + "\u73a9\u5bb6  \u3010\u5206\u914d\u8005\u89d2\u8272\u3011");
    chouzhongtxt2 = (randfake2.toString() + "\u73a9\u5bb6  \u3010\u63a5\u53d7\u8005\u89d2\u8272\u3011");
    
    text_18.setText(chouzhongtxt1);
    text_19.setText(chouzhongtxt2);
    key_resp_10.keys = undefined;
    key_resp_10.rt = undefined;
    _key_resp_10_allKeys = [];
    // keep track of which components have finished
    chouzhongjiemian2Components = [];
    chouzhongjiemian2Components.push(text_14);
    chouzhongjiemian2Components.push(text_18);
    chouzhongjiemian2Components.push(text_19);
    chouzhongjiemian2Components.push(text_20);
    chouzhongjiemian2Components.push(text_21);
    chouzhongjiemian2Components.push(key_resp_10);
    
    for (const thisComponent of chouzhongjiemian2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function chouzhongjiemian2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'chouzhongjiemian2'-------
    // get current time
    t = chouzhongjiemian2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_14* updates
    if (t >= 0.0 && text_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_14.tStart = t;  // (not accounting for frame time here)
      text_14.frameNStart = frameN;  // exact frame index
      
      text_14.setAutoDraw(true);
    }

    
    // *text_18* updates
    if (t >= 0.0 && text_18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_18.tStart = t;  // (not accounting for frame time here)
      text_18.frameNStart = frameN;  // exact frame index
      
      text_18.setAutoDraw(true);
    }

    
    // *text_19* updates
    if (t >= 0.0 && text_19.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_19.tStart = t;  // (not accounting for frame time here)
      text_19.frameNStart = frameN;  // exact frame index
      
      text_19.setAutoDraw(true);
    }

    
    // *text_20* updates
    if (t >= 0.0 && text_20.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_20.tStart = t;  // (not accounting for frame time here)
      text_20.frameNStart = frameN;  // exact frame index
      
      text_20.setAutoDraw(true);
    }

    
    // *text_21* updates
    if (t >= 0.0 && text_21.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_21.tStart = t;  // (not accounting for frame time here)
      text_21.frameNStart = frameN;  // exact frame index
      
      text_21.setAutoDraw(true);
    }

    
    // *key_resp_10* updates
    if (t >= 0.0 && key_resp_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_10.tStart = t;  // (not accounting for frame time here)
      key_resp_10.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_10.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_10.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_10.clearEvents(); });
    }

    if (key_resp_10.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_10.getKeys({keyList: ['q'], waitRelease: false});
      _key_resp_10_allKeys = _key_resp_10_allKeys.concat(theseKeys);
      if (_key_resp_10_allKeys.length > 0) {
        key_resp_10.keys = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].name;  // just the last key pressed
        key_resp_10.rt = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].rt;
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
    for (const thisComponent of chouzhongjiemian2Components)
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


function chouzhongjiemian2RoutineEnd() {
  return async function () {
    //------Ending Routine 'chouzhongjiemian2'-------
    for (const thisComponent of chouzhongjiemian2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_10.keys', key_resp_10.keys);
    if (typeof key_resp_10.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_10.rt', key_resp_10.rt);
        routineTimer.reset();
        }
    
    key_resp_10.stop();
    // the Routine "chouzhongjiemian2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_111_allKeys;
var guize1Components;
function guize1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'guize1'-------
    t = 0;
    guize1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_111.keys = undefined;
    key_resp_111.rt = undefined;
    _key_resp_111_allKeys = [];
    // keep track of which components have finished
    guize1Components = [];
    guize1Components.push(image_116);
    guize1Components.push(key_resp_111);
    
    for (const thisComponent of guize1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function guize1RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'guize1'-------
    // get current time
    t = guize1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_116* updates
    if (t >= 0.0 && image_116.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_116.tStart = t;  // (not accounting for frame time here)
      image_116.frameNStart = frameN;  // exact frame index
      
      image_116.setAutoDraw(true);
    }

    
    // *key_resp_111* updates
    if (t >= 1 && key_resp_111.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_111.tStart = t;  // (not accounting for frame time here)
      key_resp_111.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_111.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_111.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_111.clearEvents(); });
    }

    if (key_resp_111.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_111.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_111_allKeys = _key_resp_111_allKeys.concat(theseKeys);
      if (_key_resp_111_allKeys.length > 0) {
        key_resp_111.keys = _key_resp_111_allKeys[_key_resp_111_allKeys.length - 1].name;  // just the last key pressed
        key_resp_111.rt = _key_resp_111_allKeys[_key_resp_111_allKeys.length - 1].rt;
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
    for (const thisComponent of guize1Components)
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


function guize1RoutineEnd() {
  return async function () {
    //------Ending Routine 'guize1'-------
    for (const thisComponent of guize1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_111.keys', key_resp_111.keys);
    if (typeof key_resp_111.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_111.rt', key_resp_111.rt);
        routineTimer.reset();
        }
    
    key_resp_111.stop();
    // the Routine "guize1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_112_allKeys;
var guize2Components;
function guize2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'guize2'-------
    t = 0;
    guize2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_112.keys = undefined;
    key_resp_112.rt = undefined;
    _key_resp_112_allKeys = [];
    // keep track of which components have finished
    guize2Components = [];
    guize2Components.push(image_117);
    guize2Components.push(key_resp_112);
    
    for (const thisComponent of guize2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function guize2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'guize2'-------
    // get current time
    t = guize2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_117* updates
    if (t >= 0.0 && image_117.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_117.tStart = t;  // (not accounting for frame time here)
      image_117.frameNStart = frameN;  // exact frame index
      
      image_117.setAutoDraw(true);
    }

    
    // *key_resp_112* updates
    if (t >= 0.5 && key_resp_112.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_112.tStart = t;  // (not accounting for frame time here)
      key_resp_112.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_112.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_112.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_112.clearEvents(); });
    }

    if (key_resp_112.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_112.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_112_allKeys = _key_resp_112_allKeys.concat(theseKeys);
      if (_key_resp_112_allKeys.length > 0) {
        key_resp_112.keys = _key_resp_112_allKeys[_key_resp_112_allKeys.length - 1].name;  // just the last key pressed
        key_resp_112.rt = _key_resp_112_allKeys[_key_resp_112_allKeys.length - 1].rt;
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
    for (const thisComponent of guize2Components)
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


function guize2RoutineEnd() {
  return async function () {
    //------Ending Routine 'guize2'-------
    for (const thisComponent of guize2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_112.keys', key_resp_112.keys);
    if (typeof key_resp_112.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_112.rt', key_resp_112.rt);
        routineTimer.reset();
        }
    
    key_resp_112.stop();
    // the Routine "guize2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_113_allKeys;
var guize3Components;
function guize3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'guize3'-------
    t = 0;
    guize3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_113.keys = undefined;
    key_resp_113.rt = undefined;
    _key_resp_113_allKeys = [];
    // keep track of which components have finished
    guize3Components = [];
    guize3Components.push(image_118);
    guize3Components.push(key_resp_113);
    
    for (const thisComponent of guize3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function guize3RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'guize3'-------
    // get current time
    t = guize3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_118* updates
    if (t >= 0 && image_118.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_118.tStart = t;  // (not accounting for frame time here)
      image_118.frameNStart = frameN;  // exact frame index
      
      image_118.setAutoDraw(true);
    }

    
    // *key_resp_113* updates
    if (t >= 1 && key_resp_113.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_113.tStart = t;  // (not accounting for frame time here)
      key_resp_113.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_113.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_113.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_113.clearEvents(); });
    }

    if (key_resp_113.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_113.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_113_allKeys = _key_resp_113_allKeys.concat(theseKeys);
      if (_key_resp_113_allKeys.length > 0) {
        key_resp_113.keys = _key_resp_113_allKeys[_key_resp_113_allKeys.length - 1].name;  // just the last key pressed
        key_resp_113.rt = _key_resp_113_allKeys[_key_resp_113_allKeys.length - 1].rt;
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
    for (const thisComponent of guize3Components)
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


function guize3RoutineEnd() {
  return async function () {
    //------Ending Routine 'guize3'-------
    for (const thisComponent of guize3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_113.keys', key_resp_113.keys);
    if (typeof key_resp_113.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_113.rt', key_resp_113.rt);
        routineTimer.reset();
        }
    
    key_resp_113.stop();
    // the Routine "guize3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_114_allKeys;
var guize4Components;
function guize4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'guize4'-------
    t = 0;
    guize4Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_114.keys = undefined;
    key_resp_114.rt = undefined;
    _key_resp_114_allKeys = [];
    // keep track of which components have finished
    guize4Components = [];
    guize4Components.push(image_119);
    guize4Components.push(key_resp_114);
    
    for (const thisComponent of guize4Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function guize4RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'guize4'-------
    // get current time
    t = guize4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_119* updates
    if (t >= 0.0 && image_119.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_119.tStart = t;  // (not accounting for frame time here)
      image_119.frameNStart = frameN;  // exact frame index
      
      image_119.setAutoDraw(true);
    }

    
    // *key_resp_114* updates
    if (t >= 1 && key_resp_114.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_114.tStart = t;  // (not accounting for frame time here)
      key_resp_114.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_114.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_114.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_114.clearEvents(); });
    }

    if (key_resp_114.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_114.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_114_allKeys = _key_resp_114_allKeys.concat(theseKeys);
      if (_key_resp_114_allKeys.length > 0) {
        key_resp_114.keys = _key_resp_114_allKeys[_key_resp_114_allKeys.length - 1].name;  // just the last key pressed
        key_resp_114.rt = _key_resp_114_allKeys[_key_resp_114_allKeys.length - 1].rt;
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
    for (const thisComponent of guize4Components)
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


function guize4RoutineEnd() {
  return async function () {
    //------Ending Routine 'guize4'-------
    for (const thisComponent of guize4Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_114.keys', key_resp_114.keys);
    if (typeof key_resp_114.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_114.rt', key_resp_114.rt);
        routineTimer.reset();
        }
    
    key_resp_114.stop();
    // the Routine "guize4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_115_allKeys;
var guize5Components;
function guize5RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'guize5'-------
    t = 0;
    guize5Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_115.keys = undefined;
    key_resp_115.rt = undefined;
    _key_resp_115_allKeys = [];
    // keep track of which components have finished
    guize5Components = [];
    guize5Components.push(image_120);
    guize5Components.push(key_resp_115);
    
    for (const thisComponent of guize5Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function guize5RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'guize5'-------
    // get current time
    t = guize5Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_120* updates
    if (t >= 0.0 && image_120.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_120.tStart = t;  // (not accounting for frame time here)
      image_120.frameNStart = frameN;  // exact frame index
      
      image_120.setAutoDraw(true);
    }

    
    // *key_resp_115* updates
    if (t >= 1 && key_resp_115.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_115.tStart = t;  // (not accounting for frame time here)
      key_resp_115.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_115.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_115.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_115.clearEvents(); });
    }

    if (key_resp_115.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_115.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_115_allKeys = _key_resp_115_allKeys.concat(theseKeys);
      if (_key_resp_115_allKeys.length > 0) {
        key_resp_115.keys = _key_resp_115_allKeys[_key_resp_115_allKeys.length - 1].name;  // just the last key pressed
        key_resp_115.rt = _key_resp_115_allKeys[_key_resp_115_allKeys.length - 1].rt;
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
    for (const thisComponent of guize5Components)
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


function guize5RoutineEnd() {
  return async function () {
    //------Ending Routine 'guize5'-------
    for (const thisComponent of guize5Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_115.keys', key_resp_115.keys);
    if (typeof key_resp_115.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_115.rt', key_resp_115.rt);
        routineTimer.reset();
        }
    
    key_resp_115.stop();
    // the Routine "guize5" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_116_allKeys;
var guize6Components;
function guize6RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'guize6'-------
    t = 0;
    guize6Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_116.keys = undefined;
    key_resp_116.rt = undefined;
    _key_resp_116_allKeys = [];
    // keep track of which components have finished
    guize6Components = [];
    guize6Components.push(image_121);
    guize6Components.push(key_resp_116);
    
    for (const thisComponent of guize6Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function guize6RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'guize6'-------
    // get current time
    t = guize6Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_121* updates
    if (t >= 0.0 && image_121.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_121.tStart = t;  // (not accounting for frame time here)
      image_121.frameNStart = frameN;  // exact frame index
      
      image_121.setAutoDraw(true);
    }

    
    // *key_resp_116* updates
    if (t >= 1 && key_resp_116.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_116.tStart = t;  // (not accounting for frame time here)
      key_resp_116.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_116.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_116.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_116.clearEvents(); });
    }

    if (key_resp_116.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_116.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_116_allKeys = _key_resp_116_allKeys.concat(theseKeys);
      if (_key_resp_116_allKeys.length > 0) {
        key_resp_116.keys = _key_resp_116_allKeys[_key_resp_116_allKeys.length - 1].name;  // just the last key pressed
        key_resp_116.rt = _key_resp_116_allKeys[_key_resp_116_allKeys.length - 1].rt;
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
    for (const thisComponent of guize6Components)
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


function guize6RoutineEnd() {
  return async function () {
    //------Ending Routine 'guize6'-------
    for (const thisComponent of guize6Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_116.keys', key_resp_116.keys);
    if (typeof key_resp_116.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_116.rt', key_resp_116.rt);
        routineTimer.reset();
        }
    
    key_resp_116.stop();
    // the Routine "guize6" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_117_allKeys;
var guize7Components;
function guize7RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'guize7'-------
    t = 0;
    guize7Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_117.keys = undefined;
    key_resp_117.rt = undefined;
    _key_resp_117_allKeys = [];
    // keep track of which components have finished
    guize7Components = [];
    guize7Components.push(image_122);
    guize7Components.push(image_123);
    guize7Components.push(image_124);
    guize7Components.push(key_resp_117);
    
    for (const thisComponent of guize7Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function guize7RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'guize7'-------
    // get current time
    t = guize7Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_122* updates
    if (t >= 0.0 && image_122.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_122.tStart = t;  // (not accounting for frame time here)
      image_122.frameNStart = frameN;  // exact frame index
      
      image_122.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_122.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_122.setAutoDraw(false);
    }
    
    // *image_123* updates
    if (t >= 4.5 && image_123.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_123.tStart = t;  // (not accounting for frame time here)
      image_123.frameNStart = frameN;  // exact frame index
      
      image_123.setAutoDraw(true);
    }

    frameRemains = 4.5 + 6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_123.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_123.setAutoDraw(false);
    }
    
    // *image_124* updates
    if (t >= 10.5 && image_124.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_124.tStart = t;  // (not accounting for frame time here)
      image_124.frameNStart = frameN;  // exact frame index
      
      image_124.setAutoDraw(true);
    }

    
    // *key_resp_117* updates
    if (t >= 11.5 && key_resp_117.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_117.tStart = t;  // (not accounting for frame time here)
      key_resp_117.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_117.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_117.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_117.clearEvents(); });
    }

    if (key_resp_117.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_117.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_117_allKeys = _key_resp_117_allKeys.concat(theseKeys);
      if (_key_resp_117_allKeys.length > 0) {
        key_resp_117.keys = _key_resp_117_allKeys[_key_resp_117_allKeys.length - 1].name;  // just the last key pressed
        key_resp_117.rt = _key_resp_117_allKeys[_key_resp_117_allKeys.length - 1].rt;
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
    for (const thisComponent of guize7Components)
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


function guize7RoutineEnd() {
  return async function () {
    //------Ending Routine 'guize7'-------
    for (const thisComponent of guize7Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_117.keys', key_resp_117.keys);
    if (typeof key_resp_117.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_117.rt', key_resp_117.rt);
        routineTimer.reset();
        }
    
    key_resp_117.stop();
    // the Routine "guize7" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_118_allKeys;
var guize10Components;
function guize10RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'guize10'-------
    t = 0;
    guize10Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_118.keys = undefined;
    key_resp_118.rt = undefined;
    _key_resp_118_allKeys = [];
    // keep track of which components have finished
    guize10Components = [];
    guize10Components.push(image_125);
    guize10Components.push(key_resp_118);
    
    for (const thisComponent of guize10Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function guize10RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'guize10'-------
    // get current time
    t = guize10Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_125* updates
    if (t >= 0.0 && image_125.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_125.tStart = t;  // (not accounting for frame time here)
      image_125.frameNStart = frameN;  // exact frame index
      
      image_125.setAutoDraw(true);
    }

    
    // *key_resp_118* updates
    if (t >= 1 && key_resp_118.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_118.tStart = t;  // (not accounting for frame time here)
      key_resp_118.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_118.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_118.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_118.clearEvents(); });
    }

    if (key_resp_118.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_118.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_118_allKeys = _key_resp_118_allKeys.concat(theseKeys);
      if (_key_resp_118_allKeys.length > 0) {
        key_resp_118.keys = _key_resp_118_allKeys[_key_resp_118_allKeys.length - 1].name;  // just the last key pressed
        key_resp_118.rt = _key_resp_118_allKeys[_key_resp_118_allKeys.length - 1].rt;
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
    for (const thisComponent of guize10Components)
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


function guize10RoutineEnd() {
  return async function () {
    //------Ending Routine 'guize10'-------
    for (const thisComponent of guize10Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_118.keys', key_resp_118.keys);
    if (typeof key_resp_118.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_118.rt', key_resp_118.rt);
        routineTimer.reset();
        }
    
    key_resp_118.stop();
    // the Routine "guize10" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_119_allKeys;
var guize12Components;
function guize12RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'guize12'-------
    t = 0;
    guize12Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_119.keys = undefined;
    key_resp_119.rt = undefined;
    _key_resp_119_allKeys = [];
    // keep track of which components have finished
    guize12Components = [];
    guize12Components.push(image_126);
    guize12Components.push(image_127);
    guize12Components.push(key_resp_119);
    
    for (const thisComponent of guize12Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function guize12RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'guize12'-------
    // get current time
    t = guize12Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_126* updates
    if (t >= 0.0 && image_126.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_126.tStart = t;  // (not accounting for frame time here)
      image_126.frameNStart = frameN;  // exact frame index
      
      image_126.setAutoDraw(true);
    }

    frameRemains = 0.0 + 7.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_126.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_126.setAutoDraw(false);
    }
    
    // *image_127* updates
    if (t >= 7.5 && image_127.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_127.tStart = t;  // (not accounting for frame time here)
      image_127.frameNStart = frameN;  // exact frame index
      
      image_127.setAutoDraw(true);
    }

    
    // *key_resp_119* updates
    if (t >= 8.5 && key_resp_119.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_119.tStart = t;  // (not accounting for frame time here)
      key_resp_119.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_119.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_119.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_119.clearEvents(); });
    }

    if (key_resp_119.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_119.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_119_allKeys = _key_resp_119_allKeys.concat(theseKeys);
      if (_key_resp_119_allKeys.length > 0) {
        key_resp_119.keys = _key_resp_119_allKeys[_key_resp_119_allKeys.length - 1].name;  // just the last key pressed
        key_resp_119.rt = _key_resp_119_allKeys[_key_resp_119_allKeys.length - 1].rt;
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
    for (const thisComponent of guize12Components)
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


function guize12RoutineEnd() {
  return async function () {
    //------Ending Routine 'guize12'-------
    for (const thisComponent of guize12Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_119.keys', key_resp_119.keys);
    if (typeof key_resp_119.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_119.rt', key_resp_119.rt);
        routineTimer.reset();
        }
    
    key_resp_119.stop();
    // the Routine "guize12" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var dengdaitxt1;
var dengdaitxt;
var dengdaifenpeiComponents;
function dengdaifenpeiRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'dengdaifenpei'-------
    t = 0;
    dengdaifenpeiClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(5.000000);
    // update component parameters for each repeat
    dengdaitxt1 = ("\u73b0\u5728\u8bf7\u7a0d\u7b49\u7247\u523b\uff0c\u7b49[" + randfake.toString());
    dengdaitxt = (dengdaitxt1 + "\u73a9\u5bb6]\u63d0\u51fa\u65b9\u6848\u540e\uff0c");
    
    text_15.setText(dengdaitxt);
    // keep track of which components have finished
    dengdaifenpeiComponents = [];
    dengdaifenpeiComponents.push(text_15);
    dengdaifenpeiComponents.push(text_22);
    dengdaifenpeiComponents.push(text_25);
    
    for (const thisComponent of dengdaifenpeiComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function dengdaifenpeiRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'dengdaifenpei'-------
    // get current time
    t = dengdaifenpeiClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_15* updates
    if (t >= 0.0 && text_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_15.tStart = t;  // (not accounting for frame time here)
      text_15.frameNStart = frameN;  // exact frame index
      
      text_15.setAutoDraw(true);
    }

    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_15.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_15.setAutoDraw(false);
    }
    
    // *text_22* updates
    if (t >= 0.0 && text_22.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_22.tStart = t;  // (not accounting for frame time here)
      text_22.frameNStart = frameN;  // exact frame index
      
      text_22.setAutoDraw(true);
    }

    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_22.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_22.setAutoDraw(false);
    }
    
    // *text_25* updates
    if (t >= 0.0 && text_25.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_25.tStart = t;  // (not accounting for frame time here)
      text_25.frameNStart = frameN;  // exact frame index
      
      text_25.setAutoDraw(true);
    }

    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_25.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_25.setAutoDraw(false);
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
    for (const thisComponent of dengdaifenpeiComponents)
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


function dengdaifenpeiRoutineEnd() {
  return async function () {
    //------Ending Routine 'dengdaifenpei'-------
    for (const thisComponent of dengdaifenpeiComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var randnumfenpei;
var randintfenpei;
var randintfenpei2;
var fenpeizhetxt1;
var fenpeizhetxt2;
var fenpeizhetxt;
var jieshouzhetxt1;
var jieshouzhetxt2;
var jieshouzhetxt;
var fenpeipic;
var _key_resp_9_allKeys;
var fenpeijiemianComponents;
function fenpeijiemianRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'fenpeijiemian'-------
    t = 0;
    fenpeijiemianClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    randnumfenpei = (5 * Math.random());
    randintfenpei = (63 + Number.parseInt(randnumfenpei));
    randintfenpei2 = (100 - randintfenpei);
    psychoJS.experiment.addData("randintfenpei", randintfenpei);
    fenpeizhetxt1 = (randfake.toString() + "\u73a9\u5bb6\u5c06\u83b7\u5f97");
    fenpeizhetxt2 = (randintfenpei.toString() + "\u4e2a\u91d1\u5e01");
    fenpeizhetxt = (fenpeizhetxt1 + fenpeizhetxt2);
    jieshouzhetxt1 = (randfake2.toString() + "\u73a9\u5bb6\u5c06\u83b7\u5f97");
    jieshouzhetxt2 = (randintfenpei2.toString() + "\u4e2a\u91d1\u5e01");
    jieshouzhetxt = (jieshouzhetxt1 + jieshouzhetxt2);
    if (((randfake === "\u7ea2\u65b9") && (randfake2 === "\u9ec4\u65b9"))) {
        fenpeipic = "thirdphoto/fenpei_honghuang.PNG";
    } else {
        if (((randfake === "\u7ea2\u65b9") && (randfake2 === "\u84dd\u65b9"))) {
            fenpeipic = "thirdphoto/fenpei_honglan.PNG";
        } else {
            if (((randfake === "\u9ec4\u65b9") && (randfake2 === "\u7ea2\u65b9"))) {
                fenpeipic = "thirdphoto/fenpei_huanghong.PNG";
            } else {
                if (((randfake === "\u9ec4\u65b9") && (randfake2 === "\u84dd\u65b9"))) {
                    fenpeipic = "thirdphoto/fenpei_huanglan.PNG";
                } else {
                    if (((randfake === "\u84dd\u65b9") && (randfake2 === "\u7ea2\u65b9"))) {
                        fenpeipic = "thirdphoto/fenpei_lanhong.PNG";
                    } else {
                        fenpeipic = "thirdphoto/fenpei_lanhuang.PNG";
                    }
                }
            }
        }
    }
    
    image_11.setImage(fenpeipic);
    text_26.setText(fenpeizhetxt);
    text_27.setText(jieshouzhetxt);
    key_resp_9.keys = undefined;
    key_resp_9.rt = undefined;
    _key_resp_9_allKeys = [];
    // keep track of which components have finished
    fenpeijiemianComponents = [];
    fenpeijiemianComponents.push(image_11);
    fenpeijiemianComponents.push(text_26);
    fenpeijiemianComponents.push(text_27);
    fenpeijiemianComponents.push(key_resp_9);
    
    for (const thisComponent of fenpeijiemianComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function fenpeijiemianRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'fenpeijiemian'-------
    // get current time
    t = fenpeijiemianClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_11* updates
    if (t >= 0.0 && image_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_11.tStart = t;  // (not accounting for frame time here)
      image_11.frameNStart = frameN;  // exact frame index
      
      image_11.setAutoDraw(true);
    }

    
    // *text_26* updates
    if (t >= 0.0 && text_26.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_26.tStart = t;  // (not accounting for frame time here)
      text_26.frameNStart = frameN;  // exact frame index
      
      text_26.setAutoDraw(true);
    }

    
    // *text_27* updates
    if (t >= 0.0 && text_27.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_27.tStart = t;  // (not accounting for frame time here)
      text_27.frameNStart = frameN;  // exact frame index
      
      text_27.setAutoDraw(true);
    }

    
    // *key_resp_9* updates
    if (t >= 0.0 && key_resp_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_9.tStart = t;  // (not accounting for frame time here)
      key_resp_9.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_9.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_9.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_9.clearEvents(); });
    }

    if (key_resp_9.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_9.getKeys({keyList: ['f', 'j'], waitRelease: false});
      _key_resp_9_allKeys = _key_resp_9_allKeys.concat(theseKeys);
      if (_key_resp_9_allKeys.length > 0) {
        key_resp_9.keys = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].name;  // just the last key pressed
        key_resp_9.rt = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].rt;
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
    for (const thisComponent of fenpeijiemianComponents)
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


function fenpeijiemianRoutineEnd() {
  return async function () {
    //------Ending Routine 'fenpeijiemian'-------
    for (const thisComponent of fenpeijiemianComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_9.keys', key_resp_9.keys);
    if (typeof key_resp_9.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_9.rt', key_resp_9.rt);
        routineTimer.reset();
        }
    
    key_resp_9.stop();
    // the Routine "fenpeijiemian" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var slidefenpei;
var gotValidClick;
var punishslideComponents;
function punishslideRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'punishslide'-------
    t = 0;
    punishslideClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if ((key_resp_9.keys === "j")) {
        continueRoutine = false;
    }
    if (((randfake === "\u7ea2\u65b9") && (randfake2 === "\u9ec4\u65b9"))) {
        slidefenpei = "thirdphoto/wupei_honghuang.PNG";
    } else {
        if (((randfake === "\u7ea2\u65b9") && (randfake2 === "\u84dd\u65b9"))) {
            slidefenpei = "thirdphoto/wupei_honglan.PNG";
        } else {
            if (((randfake === "\u9ec4\u65b9") && (randfake2 === "\u7ea2\u65b9"))) {
                slidefenpei = "thirdphoto/wupei_huanghong.PNG";
            } else {
                if (((randfake === "\u9ec4\u65b9") && (randfake2 === "\u84dd\u65b9"))) {
                    slidefenpei = "thirdphoto/wupei_huanglan.PNG";
                } else {
                    if (((randfake === "\u84dd\u65b9") && (randfake2 === "\u7ea2\u65b9"))) {
                        slidefenpei = "thirdphoto/wupei_lanhong.PNG";
                    } else {
                        slidefenpei = "thirdphoto/wupei_lanhuang.PNG";
                    }
                }
            }
        }
    }
    
    image_12.setImage(slidefenpei);
    slider.reset()
    // setup some python lists for storing info about the mouse
    // current position of the mouse:
    mouse.x = [];
    mouse.y = [];
    mouse.leftButton = [];
    mouse.midButton = [];
    mouse.rightButton = [];
    mouse.time = [];
    mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    text_33.setText(fenpeizhetxt);
    text_34.setText(jieshouzhetxt);
    // keep track of which components have finished
    punishslideComponents = [];
    punishslideComponents.push(image_12);
    punishslideComponents.push(slider);
    punishslideComponents.push(image_13);
    punishslideComponents.push(mouse);
    punishslideComponents.push(text_29);
    punishslideComponents.push(text_30);
    punishslideComponents.push(text_31);
    punishslideComponents.push(text_32);
    punishslideComponents.push(text_28);
    punishslideComponents.push(text_33);
    punishslideComponents.push(text_34);
    
    for (const thisComponent of punishslideComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
var _mouseXYs;
var punishnum;
var punishnumint1;
var punishnumint2;
function punishslideRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'punishslide'-------
    // get current time
    t = punishslideClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_12* updates
    if (t >= 0.0 && image_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_12.tStart = t;  // (not accounting for frame time here)
      image_12.frameNStart = frameN;  // exact frame index
      
      image_12.setAutoDraw(true);
    }

    
    // *slider* updates
    if (t >= 0.0 && slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider.tStart = t;  // (not accounting for frame time here)
      slider.frameNStart = frameN;  // exact frame index
      
      slider.setAutoDraw(true);
    }

    
    // *image_13* updates
    if ((slider.rating) && image_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_13.tStart = t;  // (not accounting for frame time here)
      image_13.frameNStart = frameN;  // exact frame index
      
      image_13.setAutoDraw(true);
    }

    // *mouse* updates
    if ((slider.rating) && mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse.tStart = t;  // (not accounting for frame time here)
      mouse.frameNStart = frameN;  // exact frame index
      
      mouse.status = PsychoJS.Status.STARTED;
      mouse.mouseClock.reset();
      prevButtonState = mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse.getPos();
          mouse.x.push(_mouseXYs[0]);
          mouse.y.push(_mouseXYs[1]);
          mouse.leftButton.push(_mouseButtons[0]);
          mouse.midButton.push(_mouseButtons[1]);
          mouse.rightButton.push(_mouseButtons[2]);
          mouse.time.push(mouse.mouseClock.getTime());
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [image_13]) {
            if (obj.contains(mouse)) {
              gotValidClick = true;
              mouse.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    punishnum = slider.rating;
    punishnumint1 = Number.parseInt((punishnum || 0));
    punishnumint2 = (3 * punishnumint1);
    
    
    // *text_29* updates
    if (t >= 0.0 && text_29.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_29.tStart = t;  // (not accounting for frame time here)
      text_29.frameNStart = frameN;  // exact frame index
      
      text_29.setAutoDraw(true);
    }

    
    if (text_29.status === PsychoJS.Status.STARTED){ // only update if being drawn
      text_29.setText(punishnumint1, false);
    }
    
    // *text_30* updates
    if (t >= 0.0 && text_30.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_30.tStart = t;  // (not accounting for frame time here)
      text_30.frameNStart = frameN;  // exact frame index
      
      text_30.setAutoDraw(true);
    }

    
    if (text_30.status === PsychoJS.Status.STARTED){ // only update if being drawn
      text_30.setText(punishnumint2, false);
    }
    
    // *text_31* updates
    if (t >= 0.0 && text_31.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_31.tStart = t;  // (not accounting for frame time here)
      text_31.frameNStart = frameN;  // exact frame index
      
      text_31.setAutoDraw(true);
    }

    
    // *text_32* updates
    if (t >= 0.0 && text_32.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_32.tStart = t;  // (not accounting for frame time here)
      text_32.frameNStart = frameN;  // exact frame index
      
      text_32.setAutoDraw(true);
    }

    
    // *text_28* updates
    if (t >= 0.0 && text_28.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_28.tStart = t;  // (not accounting for frame time here)
      text_28.frameNStart = frameN;  // exact frame index
      
      text_28.setAutoDraw(true);
    }

    
    // *text_33* updates
    if (t >= 0.0 && text_33.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_33.tStart = t;  // (not accounting for frame time here)
      text_33.frameNStart = frameN;  // exact frame index
      
      text_33.setAutoDraw(true);
    }

    
    // *text_34* updates
    if (t >= 0.0 && text_34.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_34.tStart = t;  // (not accounting for frame time here)
      text_34.frameNStart = frameN;  // exact frame index
      
      text_34.setAutoDraw(true);
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
    for (const thisComponent of punishslideComponents)
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


function punishslideRoutineEnd() {
  return async function () {
    //------Ending Routine 'punishslide'-------
    for (const thisComponent of punishslideComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('slider.response', slider.getRating());
    psychoJS.experiment.addData('slider.rt', slider.getRT());
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse.x) {  psychoJS.experiment.addData('mouse.x', mouse.x[0])};
    if (mouse.y) {  psychoJS.experiment.addData('mouse.y', mouse.y[0])};
    if (mouse.leftButton) {  psychoJS.experiment.addData('mouse.leftButton', mouse.leftButton[0])};
    if (mouse.midButton) {  psychoJS.experiment.addData('mouse.midButton', mouse.midButton[0])};
    if (mouse.rightButton) {  psychoJS.experiment.addData('mouse.rightButton', mouse.rightButton[0])};
    if (mouse.time) {  psychoJS.experiment.addData('mouse.time', mouse.time[0])};
    if (mouse.clicked_name) {  psychoJS.experiment.addData('mouse.clicked_name', mouse.clicked_name[0])};
    
    // the Routine "punishslide" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var houcepic;
var _houceguilt2_rate_allKeys;
var guit2_rateComponents;
function guit2_rateRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'guit2_rate'-------
    t = 0;
    guit2_rateClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if ((randfake === "\u7ea2\u65b9")) {
        houcepic = "thirdphoto/neijiu2_hong.PNG";
    } else {
        if ((randfake === "\u9ec4\u65b9")) {
            houcepic = "thirdphoto/neijiu2_huang.PNG";
        } else {
            houcepic = "thirdphoto/neijiu2_lan.PNG";
        }
    }
    
    huobanchengxina_15.setImage(houcepic);
    houceguilt2_rate.keys = undefined;
    houceguilt2_rate.rt = undefined;
    _houceguilt2_rate_allKeys = [];
    // keep track of which components have finished
    guit2_rateComponents = [];
    guit2_rateComponents.push(huobanchengxina_15);
    guit2_rateComponents.push(houceguilt2_rate);
    
    for (const thisComponent of guit2_rateComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function guit2_rateRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'guit2_rate'-------
    // get current time
    t = guit2_rateClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *huobanchengxina_15* updates
    if (t >= 0.0 && huobanchengxina_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      huobanchengxina_15.tStart = t;  // (not accounting for frame time here)
      huobanchengxina_15.frameNStart = frameN;  // exact frame index
      
      huobanchengxina_15.setAutoDraw(true);
    }

    
    // *houceguilt2_rate* updates
    if (t >= 0.0 && houceguilt2_rate.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      houceguilt2_rate.tStart = t;  // (not accounting for frame time here)
      houceguilt2_rate.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { houceguilt2_rate.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { houceguilt2_rate.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { houceguilt2_rate.clearEvents(); });
    }

    if (houceguilt2_rate.status === PsychoJS.Status.STARTED) {
      let theseKeys = houceguilt2_rate.getKeys({keyList: ['1', '2', '3', '4', '5', '6', '7'], waitRelease: false});
      _houceguilt2_rate_allKeys = _houceguilt2_rate_allKeys.concat(theseKeys);
      if (_houceguilt2_rate_allKeys.length > 0) {
        houceguilt2_rate.keys = _houceguilt2_rate_allKeys[_houceguilt2_rate_allKeys.length - 1].name;  // just the last key pressed
        houceguilt2_rate.rt = _houceguilt2_rate_allKeys[_houceguilt2_rate_allKeys.length - 1].rt;
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
    for (const thisComponent of guit2_rateComponents)
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


function guit2_rateRoutineEnd() {
  return async function () {
    //------Ending Routine 'guit2_rate'-------
    for (const thisComponent of guit2_rateComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('houceguilt2_rate.keys', houceguilt2_rate.keys);
    if (typeof houceguilt2_rate.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('houceguilt2_rate.rt', houceguilt2_rate.rt);
        routineTimer.reset();
        }
    
    houceguilt2_rate.stop();
    // the Routine "guit2_rate" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var gundongfanganComponents;
function gundongfanganRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'gundongfangan'-------
    t = 0;
    gundongfanganClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(13.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    gundongfanganComponents = [];
    gundongfanganComponents.push(image_131);
    gundongfanganComponents.push(image_128);
    gundongfanganComponents.push(image_129);
    gundongfanganComponents.push(image_130);
    
    for (const thisComponent of gundongfanganComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function gundongfanganRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'gundongfangan'-------
    // get current time
    t = gundongfanganClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_131* updates
    if (t >= 0.0 && image_131.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_131.tStart = t;  // (not accounting for frame time here)
      image_131.frameNStart = frameN;  // exact frame index
      
      image_131.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_131.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_131.setAutoDraw(false);
    }
    
    // *image_128* updates
    if (t >= 4 && image_128.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_128.tStart = t;  // (not accounting for frame time here)
      image_128.frameNStart = frameN;  // exact frame index
      
      image_128.setAutoDraw(true);
    }

    frameRemains = 4 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_128.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_128.setAutoDraw(false);
    }
    
    // *image_129* updates
    if (t >= 7 && image_129.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_129.tStart = t;  // (not accounting for frame time here)
      image_129.frameNStart = frameN;  // exact frame index
      
      image_129.setAutoDraw(true);
    }

    frameRemains = 7 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_129.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_129.setAutoDraw(false);
    }
    
    // *image_130* updates
    if (t >= 10 && image_130.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_130.tStart = t;  // (not accounting for frame time here)
      image_130.frameNStart = frameN;  // exact frame index
      
      image_130.setAutoDraw(true);
    }

    frameRemains = 10 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_130.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_130.setAutoDraw(false);
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
    for (const thisComponent of gundongfanganComponents)
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


function gundongfanganRoutineEnd() {
  return async function () {
    //------Ending Routine 'gundongfangan'-------
    for (const thisComponent of gundongfanganComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var _unfair_rate_allKeys;
var unfairrateComponents;
function unfairrateRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'unfairrate'-------
    t = 0;
    unfairrateClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    unfair_rate.keys = undefined;
    unfair_rate.rt = undefined;
    _unfair_rate_allKeys = [];
    // keep track of which components have finished
    unfairrateComponents = [];
    unfairrateComponents.push(image_14);
    unfairrateComponents.push(unfair_rate);
    
    for (const thisComponent of unfairrateComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function unfairrateRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'unfairrate'-------
    // get current time
    t = unfairrateClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_14* updates
    if (t >= 0.0 && image_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_14.tStart = t;  // (not accounting for frame time here)
      image_14.frameNStart = frameN;  // exact frame index
      
      image_14.setAutoDraw(true);
    }

    
    // *unfair_rate* updates
    if (t >= 0.0 && unfair_rate.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      unfair_rate.tStart = t;  // (not accounting for frame time here)
      unfair_rate.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { unfair_rate.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { unfair_rate.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { unfair_rate.clearEvents(); });
    }

    if (unfair_rate.status === PsychoJS.Status.STARTED) {
      let theseKeys = unfair_rate.getKeys({keyList: ['1', '2', '3', '4', '5', '6', '7'], waitRelease: false});
      _unfair_rate_allKeys = _unfair_rate_allKeys.concat(theseKeys);
      if (_unfair_rate_allKeys.length > 0) {
        unfair_rate.keys = _unfair_rate_allKeys[_unfair_rate_allKeys.length - 1].name;  // just the last key pressed
        unfair_rate.rt = _unfair_rate_allKeys[_unfair_rate_allKeys.length - 1].rt;
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
    for (const thisComponent of unfairrateComponents)
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


function unfairrateRoutineEnd() {
  return async function () {
    //------Ending Routine 'unfairrate'-------
    for (const thisComponent of unfairrateComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('unfair_rate.keys', unfair_rate.keys);
    if (typeof unfair_rate.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('unfair_rate.rt', unfair_rate.rt);
        routineTimer.reset();
        }
    
    unfair_rate.stop();
    // the Routine "unfairrate" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_7_allKeys;
var zuihouaComponents;
function zuihouaRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'zuihoua'-------
    t = 0;
    zuihouaClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_7.keys = undefined;
    key_resp_7.rt = undefined;
    _key_resp_7_allKeys = [];
    // keep track of which components have finished
    zuihouaComponents = [];
    zuihouaComponents.push(key_resp_7);
    zuihouaComponents.push(zuihounene);
    
    for (const thisComponent of zuihouaComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function zuihouaRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'zuihoua'-------
    // get current time
    t = zuihouaClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_7* updates
    if (t >= 0.0 && key_resp_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_7.tStart = t;  // (not accounting for frame time here)
      key_resp_7.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_7.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.clearEvents(); });
    }

    if (key_resp_7.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_7.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_7_allKeys = _key_resp_7_allKeys.concat(theseKeys);
      if (_key_resp_7_allKeys.length > 0) {
        key_resp_7.keys = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].name;  // just the last key pressed
        key_resp_7.rt = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *zuihounene* updates
    if (t >= 0.0 && zuihounene.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      zuihounene.tStart = t;  // (not accounting for frame time here)
      zuihounene.frameNStart = frameN;  // exact frame index
      
      zuihounene.setAutoDraw(true);
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
    for (const thisComponent of zuihouaComponents)
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


function zuihouaRoutineEnd() {
  return async function () {
    //------Ending Routine 'zuihoua'-------
    for (const thisComponent of zuihouaComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_7.keys', key_resp_7.keys);
    if (typeof key_resp_7.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_7.rt', key_resp_7.rt);
        routineTimer.reset();
        }
    
    key_resp_7.stop();
    // the Routine "zuihoua" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
