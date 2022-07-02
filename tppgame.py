#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2021.2.3),
    on 五月 14, 2022, at 18:44
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from __future__ import absolute_import, division

from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '2021.2.3'
expName = '点估计'  # from the Builder filename that created this script
expInfo = {'以下为答题说明↓↓↓': ['请在"participant"一栏中输入您姓名的【全部拼音】'], 'participant': '', '性别': ['男', '女'], '年龄': '', '支付宝账号(请与问卷中一致)': ''}
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='C:\\Users\\34019\\Desktop\\毕业实验设计\\实验1\\gamene1211\\gameyo1211_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# Setup the Window
win = visual.Window(
    size=[1440, 900], fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='testMonitor', color='white', colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='norm')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# Setup eyetracking
ioDevice = ioConfig = ioSession = ioServer = eyetracker = None

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "practice"
practiceClock = core.Clock()
image123 = visual.ImageStim(
    win=win,
    name='image123', 
    image='shashin/zhidaoyu.png', mask=None,
    ori=0.0, pos=(0, 0), size=(2, 2),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
key_resp = keyboard.Keyboard()

# Initialize components for Routine "fixation"
fixationClock = core.Clock()
polygon = visual.ShapeStim(
    win=win, name='polygon', vertices='cross',units='height', 
    size=(0.05, 0.05),
    ori=0.0, pos=(0, 0),
    lineWidth=1.0,     colorSpace='rgb',  lineColor='black', fillColor='black',
    opacity=None, depth=0.0, interpolate=True)

# Initialize components for Routine "trail1"
trail1Clock = core.Clock()
randomdot_2 = visual.ImageStim(
    win=win,
    name='randomdot_2', units='norm', 
    image='sin', mask=None,
    ori=0.0, pos=(0, 0), size=[2,2],
    color='white', colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
more_2 = visual.TextStim(win=win, name='more_2',
    text='大于',
    font='Open Sans',
    pos=(-0.5, -0.5), height=0.1, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
less_2 = visual.TextStim(win=win, name='less_2',
    text='小于',
    font='Open Sans',
    pos=(0.5, -0.5), height=0.1, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
dot_resp_2 = keyboard.Keyboard()
F_2 = visual.TextStim(win=win, name='F_2',
    text='F',
    font='Open Sans',
    pos=(-0.5, -0.65), height=0.1, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-4.0);
J_2 = visual.TextStim(win=win, name='J_2',
    text='J',
    font='Open Sans',
    pos=(0.5, -0.65), height=0.1, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-5.0);
redcircle_2 = visual.ShapeStim(
    win=win, name='redcircle_2',units='height', 
    size=(0.2, 0.2), vertices='circle',
    ori=0.0, pos=(0, 0),
    lineWidth=5.0,     colorSpace='rgb',  lineColor='red', fillColor='white',
    opacity=None, depth=-6.0, interpolate=True)
number_2 = visual.TextStim(win=win, name='number_2',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.2, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-7.0);

# Initialize components for Routine "feedback1"
feedback1Clock = core.Clock()
image_3 = visual.ImageStim(
    win=win,
    name='image_3', 
    image='sin', mask=None,
    ori=0.0, pos=(0, 0), size=(2, 2),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)

# Initialize components for Routine "practiceend"
practiceendClock = core.Clock()
img_practice_end = visual.ImageStim(
    win=win,
    name='img_practice_end', units='norm', 
    image='shashin/practice_end.png', mask=None,
    ori=0.0, pos=(0, 0), size=(2, 2),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
key_resp_2 = keyboard.Keyboard()

# Initialize components for Routine "chouhao"
chouhaoClock = core.Clock()
selectedcolor=''
image_4 = visual.ImageStim(
    win=win,
    name='image_4', units='norm', 
    image='shashin/chosecolor.png', mask=None,
    ori=0.0, pos=(0, 0), size=(2, 2),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
key_resp_3 = keyboard.Keyboard()

# Initialize components for Routine "nichengfenpei"
nichengfenpeiClock = core.Clock()
image_8 = visual.ImageStim(
    win=win,
    name='image_8', units='norm', 
    image='sin', mask=None,
    ori=0.0, pos=(0, 0), size=(2, 2),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
text_7 = visual.TextStim(win=win, name='text_7',
    text='',
    font='Open Sans',
    pos=(0, -0.3), height=0.1, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
text = visual.TextStim(win=win, name='text',
    text='现在我们将为您匹配游戏合作伙伴\n',
    font='Open Sans',
    pos=(0, -0.55), height=0.1, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);

# Initialize components for Routine "pipei"
pipeiClock = core.Clock()
text_5 = visual.TextStim(win=win, name='text_5',
    text='匹配中，请稍等…',
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "chengong"
chengongClock = core.Clock()
playerlist=['红方','蓝方','黄方']
image_9 = visual.ImageStim(
    win=win,
    name='image_9', 
    image='sin', mask=None,
    ori=0.0, pos=(0, 0), size=(2, 2),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
text_6 = visual.TextStim(win=win, name='text_6',
    text='',
    font='Open Sans',
    pos=(0, -0.45), height=0.1, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);

# Initialize components for Routine "start"
startClock = core.Clock()
text_3 = visual.TextStim(win=win, name='text_3',
    text='游戏开始，请做好准备',
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "fixation"
fixationClock = core.Clock()
polygon = visual.ShapeStim(
    win=win, name='polygon', vertices='cross',units='height', 
    size=(0.05, 0.05),
    ori=0.0, pos=(0, 0),
    lineWidth=1.0,     colorSpace='rgb',  lineColor='black', fillColor='black',
    opacity=None, depth=0.0, interpolate=True)

# Initialize components for Routine "trial"
trialClock = core.Clock()
randomdot = visual.ImageStim(
    win=win,
    name='randomdot', units='norm', 
    image='sin', mask=None,
    ori=0.0, pos=(0, 0), size=[2,2],
    color='white', colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
more = visual.TextStim(win=win, name='more',
    text='大于',
    font='Open Sans',
    pos=(-0.5, -0.5), height=0.1, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
less = visual.TextStim(win=win, name='less',
    text='小于',
    font='Open Sans',
    pos=(0.5, -0.5), height=0.1, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
dot_resp = keyboard.Keyboard()
F = visual.TextStim(win=win, name='F',
    text='F',
    font='Open Sans',
    pos=(-0.5, -0.65), height=0.1, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-4.0);
J = visual.TextStim(win=win, name='J',
    text='J',
    font='Open Sans',
    pos=(0.5, -0.65), height=0.1, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-5.0);
redcircle = visual.ShapeStim(
    win=win, name='redcircle',units='height', 
    size=(0.2, 0.2), vertices='circle',
    ori=0.0, pos=(0, 0),
    lineWidth=5.0,     colorSpace='rgb',  lineColor='red', fillColor='white',
    opacity=None, depth=-6.0, interpolate=True)
number = visual.TextStim(win=win, name='number',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.2, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-7.0);

# Initialize components for Routine "randblank"
randblankClock = core.Clock()
text_12 = visual.TextStim(win=win, name='text_12',
    text=None,
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "feedback3"
feedback3Clock = core.Clock()
feedbacklist1=['错误','错误','错误','正确','错误','正确','正确','错误','正确','错误','错误','错误']
feedbacklist2=['正确','正确','正确','正确','正确','错误','正确','正确','错误','错误','正确','正确']
feedcolor1 = ''
feedcolor2 = ''
text_4 = visual.TextStim(win=win, name='text_4',
    text='',
    font='Open Sans',
    pos=(-0.125, 0.1), height=0.1, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
text_8 = visual.TextStim(win=win, name='text_8',
    text='',
    font='Open Sans',
    pos=(-0.15, -0.1), height=0.1, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
player1_TF = visual.TextStim(win=win, name='player1_TF',
    text='',
    font='Open Sans',
    pos=(0.2, 0.1), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);
player2_TF = visual.TextStim(win=win, name='player2_TF',
    text='',
    font='Open Sans',
    pos=(0.2, -0.1), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-4.0);
text_35 = visual.TextStim(win=win, name='text_35',
    text='',
    font='Open Sans',
    pos=(0, -0.4), height=0.1, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-5.0);

# Initialize components for Routine "ITI"
ITIClock = core.Clock()
kongping = visual.TextStim(win=win, name='kongping',
    text=None,
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "tongjia"
tongjiaClock = core.Clock()
text_10 = visual.TextStim(win=win, name='text_10',
    text='请稍等，系统正在统计双方结果。',
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "jieguonene"
jieguoneneClock = core.Clock()
ends_resp = keyboard.Keyboard()
image_2 = visual.ImageStim(
    win=win,
    name='image_2', 
    image='shashin/neijiu.png', mask=None,
    ori=0.0, pos=(0, 0), size=(2, 2),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)

# Initialize components for Routine "guilt1"
guilt1Clock = core.Clock()
image_5 = visual.ImageStim(
    win=win,
    name='image_5', 
    image='shashin/neijiuchengdu.png', mask=None,
    ori=0.0, pos=(0, 0), size=(2, 2),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
guilt1_ping_5 = keyboard.Keyboard()

# Initialize components for Routine "ceshi"
ceshiClock = core.Clock()
image_6 = visual.ImageStim(
    win=win,
    name='image_6', 
    image='shashin/jiance.png', mask=None,
    ori=0.0, pos=(0, 0), size=(2, 2),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
wanjia_name_6 = keyboard.Keyboard()

# Initialize components for Routine "chengshangqixia"
chengshangqixiaClock = core.Clock()
text_2 = visual.TextStim(win=win, name='text_2',
    text='即将进入第二个阶段的游戏\n\n      请做好准备',
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "youxi2jieshao"
youxi2jieshaoClock = core.Clock()
text_11 = visual.TextStim(win=win, name='text_11',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "anotherwanjia"
anotherwanjiaClock = core.Clock()
image_7 = visual.ImageStim(
    win=win,
    name='image_7', 
    image='sin', mask=None,
    ori=0.0, pos=(0, 0), size=(2, 2),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
text_16 = visual.TextStim(win=win, name='text_16',
    text='',
    font='Open Sans',
    pos=(0, -0.25), height=0.1, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);

# Initialize components for Routine "chouxuanren1"
chouxuanren1Clock = core.Clock()
text_13 = visual.TextStim(win=win, name='text_13',
    text='',
    font='Open Sans',
    pos=(0, 0.2), height=0.08, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
text_23 = visual.TextStim(win=win, name='text_23',
    text='抽取2名玩家参与一项金钱分配游戏',
    font='Open Sans',
    pos=(0, 0), height=0.08, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
text_17 = visual.TextStim(win=win, name='text_17',
    text='由于此游戏只有2个角色，因此每位玩家抽中的概率是2/3',
    font='Open Sans',
    pos=(0, -0.2), height=0.08, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);

# Initialize components for Routine "chouzhongjiemian2"
chouzhongjiemian2Clock = core.Clock()
text_14 = visual.TextStim(win=win, name='text_14',
    text='抽中金钱分配游戏的玩家为：\n\n',
    font='Open Sans',
    pos=(0, 0.25), height=0.1, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
text_18 = visual.TextStim(win=win, name='text_18',
    text='',
    font='Open Sans',
    pos=(0, 0.1), height=0.1, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
text_19 = visual.TextStim(win=win, name='text_19',
    text='',
    font='Open Sans',
    pos=(0, -0.1), height=0.1, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);
text_20 = visual.TextStim(win=win, name='text_20',
    text='未抽中的玩家请按Q键退出本界面',
    font='Open Sans',
    pos=(0, -0.35), height=0.08, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-4.0);
text_21 = visual.TextStim(win=win, name='text_21',
    text='抽中游戏的玩家请按空格键进入游戏规则界面',
    font='Open Sans',
    pos=(0, -0.5), height=0.08, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-5.0);
key_resp_10 = keyboard.Keyboard()

# Initialize components for Routine "guize1"
guize1Clock = core.Clock()
image_116 = visual.ImageStim(
    win=win,
    name='image_116', 
    image='thirdphoto/chengfa1.PNG', mask=None,
    ori=0.0, pos=(0, 0), size=(2, 2),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
key_resp_111 = keyboard.Keyboard()

# Initialize components for Routine "guize2"
guize2Clock = core.Clock()
image_117 = visual.ImageStim(
    win=win,
    name='image_117', 
    image='thirdphoto/chengfa2.PNG', mask=None,
    ori=0.0, pos=(0, 0), size=(2, 2),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
key_resp_112 = keyboard.Keyboard()

# Initialize components for Routine "guize3"
guize3Clock = core.Clock()
image_118 = visual.ImageStim(
    win=win,
    name='image_118', 
    image='thirdphoto/chengfa3.PNG', mask=None,
    ori=0.0, pos=(0, 0), size=(2, 2),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
key_resp_113 = keyboard.Keyboard()

# Initialize components for Routine "guize4"
guize4Clock = core.Clock()
image_119 = visual.ImageStim(
    win=win,
    name='image_119', 
    image='thirdphoto/chengfa4.PNG', mask=None,
    ori=0.0, pos=(0, 0), size=(2, 2),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
key_resp_114 = keyboard.Keyboard()

# Initialize components for Routine "guize5"
guize5Clock = core.Clock()
image_120 = visual.ImageStim(
    win=win,
    name='image_120', 
    image='thirdphoto/chengfa5.PNG', mask=None,
    ori=0.0, pos=(0, 0), size=(2, 2),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
key_resp_115 = keyboard.Keyboard()

# Initialize components for Routine "guize6"
guize6Clock = core.Clock()
image_121 = visual.ImageStim(
    win=win,
    name='image_121', 
    image='thirdphoto/chengfa6.PNG', mask=None,
    ori=0.0, pos=(0, 0), size=(2, 2),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
key_resp_116 = keyboard.Keyboard()

# Initialize components for Routine "guize7"
guize7Clock = core.Clock()
image_122 = visual.ImageStim(
    win=win,
    name='image_122', 
    image='thirdphoto/chengfa7.PNG', mask=None,
    ori=0.0, pos=(0, 0), size=(2, 2),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
image_123 = visual.ImageStim(
    win=win,
    name='image_123', 
    image='thirdphoto/chengfa8.PNG', mask=None,
    ori=0.0, pos=(0, 0), size=(2, 2),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
image_124 = visual.ImageStim(
    win=win,
    name='image_124', 
    image='thirdphoto/chengfa9.PNG', mask=None,
    ori=0.0, pos=(0, 0), size=(2, 2),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)
key_resp_117 = keyboard.Keyboard()

# Initialize components for Routine "guize10"
guize10Clock = core.Clock()
image_125 = visual.ImageStim(
    win=win,
    name='image_125', 
    image='thirdphoto/chengfa10.PNG', mask=None,
    ori=0.0, pos=(0, 0), size=(2, 2),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
key_resp_118 = keyboard.Keyboard()

# Initialize components for Routine "guize12"
guize12Clock = core.Clock()
image_126 = visual.ImageStim(
    win=win,
    name='image_126', 
    image='thirdphoto/chengfa11.PNG', mask=None,
    ori=0.0, pos=(0, 0), size=(2, 2),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
image_127 = visual.ImageStim(
    win=win,
    name='image_127', 
    image='thirdphoto/chengfa12.PNG', mask=None,
    ori=0.0, pos=(0, 0), size=(2, 2),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
key_resp_119 = keyboard.Keyboard()

# Initialize components for Routine "dengdaifenpei"
dengdaifenpeiClock = core.Clock()
text_15 = visual.TextStim(win=win, name='text_15',
    text='',
    font='Open Sans',
    pos=(0, 0.1), height=0.08, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
text_22 = visual.TextStim(win=win, name='text_22',
    text='系统将给您呈现分配者方案，',
    font='Open Sans',
    pos=(0, -0.1), height=0.08, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
text_25 = visual.TextStim(win=win, name='text_25',
    text='您的惩罚与否只会影响到分配者的最终收益',
    font='Open Sans',
    pos=(0, -0.3), height=0.08, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);

# Initialize components for Routine "fenpeijiemian"
fenpeijiemianClock = core.Clock()
image_11 = visual.ImageStim(
    win=win,
    name='image_11', 
    image='sin', mask=None,
    ori=0.0, pos=(0, 0), size=(2, 2),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
text_26 = visual.TextStim(win=win, name='text_26',
    text='',
    font='Open Sans',
    pos=(-0.4, -0.15), height=0.07, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
text_27 = visual.TextStim(win=win, name='text_27',
    text='',
    font='Open Sans',
    pos=(0.4, -0.15), height=0.07, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);
key_resp_9 = keyboard.Keyboard()

# Initialize components for Routine "punishslide"
punishslideClock = core.Clock()
image_12 = visual.ImageStim(
    win=win,
    name='image_12', 
    image='sin', mask=None,
    ori=0.0, pos=(0, 0), size=(2, 2),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
slider = visual.Slider(win=win, name='slider',
    startValue=None, size=(0.8, 0.07), pos=(0, -0.65), units=None,
    labels=['1','10','20','30'], ticks=(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30), granularity=1.0,
    style='scrollbar', styleTweaks=(), opacity=None,
    color='black', fillColor=[0.0039, 0.0039, 0.0039], borderColor='black', colorSpace='rgb',
    font='Open Sans', labelHeight=0.06,
    flip=False, depth=-2, readOnly=False)
image_13 = visual.ImageStim(
    win=win,
    name='image_13', 
    image='thirdphoto/okbutton.png', mask=None,
    ori=0.0, pos=(0, -0.85), size=(0.1, 0.1),
    color='white', colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-3.0)
mouse = event.Mouse(win=win)
x, y = [None, None]
mouse.mouseClock = core.Clock()
text_29 = visual.TextStim(win=win, name='text_29',
    text='',
    font='Open Sans',
    pos=(0.15, -0.45), height=0.06, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-6.0);
text_30 = visual.TextStim(win=win, name='text_30',
    text='',
    font='Open Sans',
    pos=(0.15, -0.55), height=0.06, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-7.0);
text_31 = visual.TextStim(win=win, name='text_31',
    text='你付出的金币为:',
    font='Open Sans',
    pos=(-0.05, -0.45), height=0.06, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-8.0);
text_32 = visual.TextStim(win=win, name='text_32',
    text='惩罚分配者的金额为:',
    font='Open Sans',
    pos=(-0.1, -0.55), height=0.06, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-9.0);
text_28 = visual.TextStim(win=win, name='text_28',
    text='请使用鼠标拖动滑动条，选择惩罚的金额\n  拖动好后，请点击ok进入下一界面',
    font='Open Sans',
    pos=(0, -0.3), height=0.06, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-10.0);
text_33 = visual.TextStim(win=win, name='text_33',
    text='',
    font='Open Sans',
    pos=(-0.4, -0.15), height=0.07, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-11.0);
text_34 = visual.TextStim(win=win, name='text_34',
    text='',
    font='Open Sans',
    pos=(0.4, -0.15), height=0.07, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-12.0);

# Initialize components for Routine "guit2_rate"
guit2_rateClock = core.Clock()
huobanchengxina_15 = visual.ImageStim(
    win=win,
    name='huobanchengxina_15', 
    image='sin', mask=None,
    ori=0.0, pos=(0, 0), size=(2, 2),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
houceguilt2_rate = keyboard.Keyboard()

# Initialize components for Routine "gundongfangan"
gundongfanganClock = core.Clock()
image_131 = visual.ImageStim(
    win=win,
    name='image_131', 
    image='thirdphoto/fanganzhanshi.PNG', mask=None,
    ori=0.0, pos=(0, 0), size=(2, 2),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
image_128 = visual.ImageStim(
    win=win,
    name='image_128', 
    image='thirdphoto/gun1.PNG', mask=None,
    ori=0.0, pos=(0, 0), size=(2, 2),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
image_129 = visual.ImageStim(
    win=win,
    name='image_129', 
    image='thirdphoto/gun2.PNG', mask=None,
    ori=0.0, pos=(0, 0), size=(2, 2),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)
image_130 = visual.ImageStim(
    win=win,
    name='image_130', 
    image='thirdphoto/gun3.PNG', mask=None,
    ori=0.0, pos=(0, 0), size=(2, 2),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-3.0)

# Initialize components for Routine "unfairrate"
unfairrateClock = core.Clock()
image_14 = visual.ImageStim(
    win=win,
    name='image_14', 
    image='thirdphoto/bugongpingchengdu.PNG', mask=None,
    ori=0.0, pos=(0, 0), size=(2, 2),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
unfair_rate = keyboard.Keyboard()

# Initialize components for Routine "zuihoua"
zuihouaClock = core.Clock()
key_resp_7 = keyboard.Keyboard()
zuihounene = visual.ImageStim(
    win=win,
    name='zuihounene', 
    image='shashin/zuihoune.png', mask=None,
    ori=0.0, pos=(0, 0), size=(2, 2),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# set up handler to look after randomisation of conditions etc
trials_2 = data.TrialHandler(nReps=100.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='trials_2')
thisExp.addLoop(trials_2)  # add the loop to the experiment
thisTrial_2 = trials_2.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial_2.rgb)
if thisTrial_2 != None:
    for paramName in thisTrial_2:
        exec('{} = thisTrial_2[paramName]'.format(paramName))

for thisTrial_2 in trials_2:
    currentLoop = trials_2
    # abbreviate parameter names if possible (e.g. rgb = thisTrial_2.rgb)
    if thisTrial_2 != None:
        for paramName in thisTrial_2:
            exec('{} = thisTrial_2[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "practice"-------
    continueRoutine = True
    # update component parameters for each repeat
    key_resp.keys = []
    key_resp.rt = []
    _key_resp_allKeys = []
    # keep track of which components have finished
    practiceComponents = [image123, key_resp]
    for thisComponent in practiceComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    practiceClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "practice"-------
    while continueRoutine:
        # get current time
        t = practiceClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=practiceClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *image123* updates
        if image123.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image123.frameNStart = frameN  # exact frame index
            image123.tStart = t  # local t and not account for scr refresh
            image123.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image123, 'tStartRefresh')  # time at next scr refresh
            image123.setAutoDraw(True)
        
        # *key_resp* updates
        waitOnFlip = False
        if key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp.frameNStart = frameN  # exact frame index
            key_resp.tStart = t  # local t and not account for scr refresh
            key_resp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp, 'tStartRefresh')  # time at next scr refresh
            key_resp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp.status == STARTED and not waitOnFlip:
            theseKeys = key_resp.getKeys(keyList=['space'], waitRelease=False)
            _key_resp_allKeys.extend(theseKeys)
            if len(_key_resp_allKeys):
                key_resp.keys = _key_resp_allKeys[-1].name  # just the last key pressed
                key_resp.rt = _key_resp_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in practiceComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "practice"-------
    for thisComponent in practiceComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if key_resp.keys in ['', [], None]:  # No response was made
        key_resp.keys = None
    trials_2.addData('key_resp.keys',key_resp.keys)
    if key_resp.keys != None:  # we had a response
        trials_2.addData('key_resp.rt', key_resp.rt)
    # the Routine "practice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    practice_1 = data.TrialHandler(nReps=1.0, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions('practice.xlsx'),
        seed=None, name='practice_1')
    thisExp.addLoop(practice_1)  # add the loop to the experiment
    thisPractice_1 = practice_1.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisPractice_1.rgb)
    if thisPractice_1 != None:
        for paramName in thisPractice_1:
            exec('{} = thisPractice_1[paramName]'.format(paramName))
    
    for thisPractice_1 in practice_1:
        currentLoop = practice_1
        # abbreviate parameter names if possible (e.g. rgb = thisPractice_1.rgb)
        if thisPractice_1 != None:
            for paramName in thisPractice_1:
                exec('{} = thisPractice_1[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "fixation"-------
        continueRoutine = True
        # update component parameters for each repeat
        # keep track of which components have finished
        fixationComponents = [polygon]
        for thisComponent in fixationComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        fixationClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "fixation"-------
        while continueRoutine:
            # get current time
            t = fixationClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=fixationClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *polygon* updates
            if polygon.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                polygon.frameNStart = frameN  # exact frame index
                polygon.tStart = t  # local t and not account for scr refresh
                polygon.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(polygon, 'tStartRefresh')  # time at next scr refresh
                polygon.setAutoDraw(True)
            if polygon.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > polygon.tStartRefresh + 0.5+0.3*random()-frameTolerance:
                    # keep track of stop time/frame for later
                    polygon.tStop = t  # not accounting for scr refresh
                    polygon.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(polygon, 'tStopRefresh')  # time at next scr refresh
                    polygon.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in fixationComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "fixation"-------
        for thisComponent in fixationComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        practice_1.addData('polygon.started', polygon.tStartRefresh)
        practice_1.addData('polygon.stopped', polygon.tStopRefresh)
        # the Routine "fixation" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # ------Prepare to start Routine "trail1"-------
        continueRoutine = True
        # update component parameters for each repeat
        randomdot_2.setImage(imagefile1)
        dot_resp_2.keys = []
        dot_resp_2.rt = []
        _dot_resp_2_allKeys = []
        number_2.setText(dotnum1)
        # keep track of which components have finished
        trail1Components = [randomdot_2, more_2, less_2, dot_resp_2, F_2, J_2, redcircle_2, number_2]
        for thisComponent in trail1Components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        trail1Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "trail1"-------
        while continueRoutine:
            # get current time
            t = trail1Clock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=trail1Clock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *randomdot_2* updates
            if randomdot_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                randomdot_2.frameNStart = frameN  # exact frame index
                randomdot_2.tStart = t  # local t and not account for scr refresh
                randomdot_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(randomdot_2, 'tStartRefresh')  # time at next scr refresh
                randomdot_2.setAutoDraw(True)
            if randomdot_2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > randomdot_2.tStartRefresh + 1.5-frameTolerance:
                    # keep track of stop time/frame for later
                    randomdot_2.tStop = t  # not accounting for scr refresh
                    randomdot_2.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(randomdot_2, 'tStopRefresh')  # time at next scr refresh
                    randomdot_2.setAutoDraw(False)
            
            # *more_2* updates
            if more_2.status == NOT_STARTED and tThisFlip >= 1.5-frameTolerance:
                # keep track of start time/frame for later
                more_2.frameNStart = frameN  # exact frame index
                more_2.tStart = t  # local t and not account for scr refresh
                more_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(more_2, 'tStartRefresh')  # time at next scr refresh
                more_2.setAutoDraw(True)
            
            # *less_2* updates
            if less_2.status == NOT_STARTED and tThisFlip >= 1.5-frameTolerance:
                # keep track of start time/frame for later
                less_2.frameNStart = frameN  # exact frame index
                less_2.tStart = t  # local t and not account for scr refresh
                less_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(less_2, 'tStartRefresh')  # time at next scr refresh
                less_2.setAutoDraw(True)
            
            # *dot_resp_2* updates
            waitOnFlip = False
            if dot_resp_2.status == NOT_STARTED and tThisFlip >= 1.5-frameTolerance:
                # keep track of start time/frame for later
                dot_resp_2.frameNStart = frameN  # exact frame index
                dot_resp_2.tStart = t  # local t and not account for scr refresh
                dot_resp_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(dot_resp_2, 'tStartRefresh')  # time at next scr refresh
                dot_resp_2.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(dot_resp_2.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(dot_resp_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if dot_resp_2.status == STARTED and not waitOnFlip:
                theseKeys = dot_resp_2.getKeys(keyList=['f', 'j'], waitRelease=False)
                _dot_resp_2_allKeys.extend(theseKeys)
                if len(_dot_resp_2_allKeys):
                    dot_resp_2.keys = _dot_resp_2_allKeys[-1].name  # just the last key pressed
                    dot_resp_2.rt = _dot_resp_2_allKeys[-1].rt
                    # a response ends the routine
                    continueRoutine = False
            
            # *F_2* updates
            if F_2.status == NOT_STARTED and tThisFlip >= 1.5-frameTolerance:
                # keep track of start time/frame for later
                F_2.frameNStart = frameN  # exact frame index
                F_2.tStart = t  # local t and not account for scr refresh
                F_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(F_2, 'tStartRefresh')  # time at next scr refresh
                F_2.setAutoDraw(True)
            
            # *J_2* updates
            if J_2.status == NOT_STARTED and tThisFlip >= 1.5-frameTolerance:
                # keep track of start time/frame for later
                J_2.frameNStart = frameN  # exact frame index
                J_2.tStart = t  # local t and not account for scr refresh
                J_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(J_2, 'tStartRefresh')  # time at next scr refresh
                J_2.setAutoDraw(True)
            
            # *redcircle_2* updates
            if redcircle_2.status == NOT_STARTED and tThisFlip >= 1.5-frameTolerance:
                # keep track of start time/frame for later
                redcircle_2.frameNStart = frameN  # exact frame index
                redcircle_2.tStart = t  # local t and not account for scr refresh
                redcircle_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(redcircle_2, 'tStartRefresh')  # time at next scr refresh
                redcircle_2.setAutoDraw(True)
            
            # *number_2* updates
            if number_2.status == NOT_STARTED and tThisFlip >= 1.5-frameTolerance:
                # keep track of start time/frame for later
                number_2.frameNStart = frameN  # exact frame index
                number_2.tStart = t  # local t and not account for scr refresh
                number_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(number_2, 'tStartRefresh')  # time at next scr refresh
                number_2.setAutoDraw(True)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in trail1Components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "trail1"-------
        for thisComponent in trail1Components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # check responses
        if dot_resp_2.keys in ['', [], None]:  # No response was made
            dot_resp_2.keys = None
        practice_1.addData('dot_resp_2.keys',dot_resp_2.keys)
        if dot_resp_2.keys != None:  # we had a response
            practice_1.addData('dot_resp_2.rt', dot_resp_2.rt)
        practice_1.addData('dot_resp_2.started', dot_resp_2.tStartRefresh)
        practice_1.addData('dot_resp_2.stopped', dot_resp_2.tStopRefresh)
        # the Routine "trail1" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # ------Prepare to start Routine "feedback1"-------
        continueRoutine = True
        routineTimer.add(1.500000)
        # update component parameters for each repeat
        image_3.setImage(feedbacktext1)
        # keep track of which components have finished
        feedback1Components = [image_3]
        for thisComponent in feedback1Components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        feedback1Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "feedback1"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = feedback1Clock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=feedback1Clock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *image_3* updates
            if image_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                image_3.frameNStart = frameN  # exact frame index
                image_3.tStart = t  # local t and not account for scr refresh
                image_3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image_3, 'tStartRefresh')  # time at next scr refresh
                image_3.setAutoDraw(True)
            if image_3.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > image_3.tStartRefresh + 1.5-frameTolerance:
                    # keep track of stop time/frame for later
                    image_3.tStop = t  # not accounting for scr refresh
                    image_3.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(image_3, 'tStopRefresh')  # time at next scr refresh
                    image_3.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in feedback1Components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "feedback1"-------
        for thisComponent in feedback1Components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        thisExp.nextEntry()
        
    # completed 1.0 repeats of 'practice_1'
    
    
    # ------Prepare to start Routine "practiceend"-------
    continueRoutine = True
    # update component parameters for each repeat
    key_resp_2.keys = []
    key_resp_2.rt = []
    _key_resp_2_allKeys = []
    # keep track of which components have finished
    practiceendComponents = [img_practice_end, key_resp_2]
    for thisComponent in practiceendComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    practiceendClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "practiceend"-------
    while continueRoutine:
        # get current time
        t = practiceendClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=practiceendClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *img_practice_end* updates
        if img_practice_end.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            img_practice_end.frameNStart = frameN  # exact frame index
            img_practice_end.tStart = t  # local t and not account for scr refresh
            img_practice_end.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(img_practice_end, 'tStartRefresh')  # time at next scr refresh
            img_practice_end.setAutoDraw(True)
        
        # *key_resp_2* updates
        waitOnFlip = False
        if key_resp_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_2.frameNStart = frameN  # exact frame index
            key_resp_2.tStart = t  # local t and not account for scr refresh
            key_resp_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_2, 'tStartRefresh')  # time at next scr refresh
            key_resp_2.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_2.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_2.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_2.getKeys(keyList=['space', 'p'], waitRelease=False)
            _key_resp_2_allKeys.extend(theseKeys)
            if len(_key_resp_2_allKeys):
                key_resp_2.keys = _key_resp_2_allKeys[-1].name  # just the last key pressed
                key_resp_2.rt = _key_resp_2_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in practiceendComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "practiceend"-------
    for thisComponent in practiceendComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if key_resp_2.keys in ['', [], None]:  # No response was made
        key_resp_2.keys = None
    trials_2.addData('key_resp_2.keys',key_resp_2.keys)
    if key_resp_2.keys != None:  # we had a response
        trials_2.addData('key_resp_2.rt', key_resp_2.rt)
    trials_2.addData('key_resp_2.started', key_resp_2.tStartRefresh)
    trials_2.addData('key_resp_2.stopped', key_resp_2.tStopRefresh)
    if key_resp_2.keys == "space" :
        trials_2.finished= 1
    # the Routine "practiceend" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 100.0 repeats of 'trials_2'


# ------Prepare to start Routine "chouhao"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_3.keys = []
key_resp_3.rt = []
_key_resp_3_allKeys = []
# keep track of which components have finished
chouhaoComponents = [image_4, key_resp_3]
for thisComponent in chouhaoComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
chouhaoClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "chouhao"-------
while continueRoutine:
    # get current time
    t = chouhaoClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=chouhaoClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *image_4* updates
    if image_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_4.frameNStart = frameN  # exact frame index
        image_4.tStart = t  # local t and not account for scr refresh
        image_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_4, 'tStartRefresh')  # time at next scr refresh
        image_4.setAutoDraw(True)
    
    # *key_resp_3* updates
    waitOnFlip = False
    if key_resp_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_3.frameNStart = frameN  # exact frame index
        key_resp_3.tStart = t  # local t and not account for scr refresh
        key_resp_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_3, 'tStartRefresh')  # time at next scr refresh
        key_resp_3.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_3.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_3.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_3.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_3.getKeys(keyList=['1', '2', '3'], waitRelease=False)
        _key_resp_3_allKeys.extend(theseKeys)
        if len(_key_resp_3_allKeys):
            key_resp_3.keys = _key_resp_3_allKeys[-1].name  # just the last key pressed
            key_resp_3.rt = _key_resp_3_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in chouhaoComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "chouhao"-------
for thisComponent in chouhaoComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
if key_resp_3.keys == '1':
    selectedcolor = '灰方'
elif key_resp_3.keys == '2':
    selectedcolor = '绿方'
else:
    selectedcolor = '棕方'

thisExp.addData('selectedcolor',selectedcolor)
# check responses
if key_resp_3.keys in ['', [], None]:  # No response was made
    key_resp_3.keys = None
thisExp.addData('key_resp_3.keys',key_resp_3.keys)
if key_resp_3.keys != None:  # we had a response
    thisExp.addData('key_resp_3.rt', key_resp_3.rt)
thisExp.addData('key_resp_3.started', key_resp_3.tStartRefresh)
thisExp.addData('key_resp_3.stopped', key_resp_3.tStopRefresh)
thisExp.nextEntry()
# the Routine "chouhao" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "nichengfenpei"-------
continueRoutine = True
routineTimer.add(3.000000)
# update component parameters for each repeat
numdisplay = "您为自己选择的昵称为：" + selectedcolor

if selectedcolor == '灰方':
    selectedpic = 'thirdphoto/player_hui.PNG'
elif selectedcolor == '绿方':
    selectedpic = 'thirdphoto/player_lv.PNG'
else :
    selectedpic = 'thirdphoto/player_zong.PNG'
image_8.setImage(selectedpic)
text_7.setText(numdisplay)
# keep track of which components have finished
nichengfenpeiComponents = [image_8, text_7, text]
for thisComponent in nichengfenpeiComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
nichengfenpeiClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "nichengfenpei"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = nichengfenpeiClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=nichengfenpeiClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *image_8* updates
    if image_8.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_8.frameNStart = frameN  # exact frame index
        image_8.tStart = t  # local t and not account for scr refresh
        image_8.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_8, 'tStartRefresh')  # time at next scr refresh
        image_8.setAutoDraw(True)
    if image_8.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > image_8.tStartRefresh + 3-frameTolerance:
            # keep track of stop time/frame for later
            image_8.tStop = t  # not accounting for scr refresh
            image_8.frameNStop = frameN  # exact frame index
            win.timeOnFlip(image_8, 'tStopRefresh')  # time at next scr refresh
            image_8.setAutoDraw(False)
    
    # *text_7* updates
    if text_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_7.frameNStart = frameN  # exact frame index
        text_7.tStart = t  # local t and not account for scr refresh
        text_7.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_7, 'tStartRefresh')  # time at next scr refresh
        text_7.setAutoDraw(True)
    if text_7.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > text_7.tStartRefresh + 3-frameTolerance:
            # keep track of stop time/frame for later
            text_7.tStop = t  # not accounting for scr refresh
            text_7.frameNStop = frameN  # exact frame index
            win.timeOnFlip(text_7, 'tStopRefresh')  # time at next scr refresh
            text_7.setAutoDraw(False)
    
    # *text* updates
    if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text.frameNStart = frameN  # exact frame index
        text.tStart = t  # local t and not account for scr refresh
        text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
        text.setAutoDraw(True)
    if text.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > text.tStartRefresh + 3-frameTolerance:
            # keep track of stop time/frame for later
            text.tStop = t  # not accounting for scr refresh
            text.frameNStop = frameN  # exact frame index
            win.timeOnFlip(text, 'tStopRefresh')  # time at next scr refresh
            text.setAutoDraw(False)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in nichengfenpeiComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "nichengfenpei"-------
for thisComponent in nichengfenpeiComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)

# ------Prepare to start Routine "pipei"-------
continueRoutine = True
# update component parameters for each repeat
# keep track of which components have finished
pipeiComponents = [text_5]
for thisComponent in pipeiComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
pipeiClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "pipei"-------
while continueRoutine:
    # get current time
    t = pipeiClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=pipeiClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_5* updates
    if text_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_5.frameNStart = frameN  # exact frame index
        text_5.tStart = t  # local t and not account for scr refresh
        text_5.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_5, 'tStartRefresh')  # time at next scr refresh
        text_5.setAutoDraw(True)
    if text_5.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > text_5.tStartRefresh + 2+1.6*random()-frameTolerance:
            # keep track of stop time/frame for later
            text_5.tStop = t  # not accounting for scr refresh
            text_5.frameNStop = frameN  # exact frame index
            win.timeOnFlip(text_5, 'tStopRefresh')  # time at next scr refresh
            text_5.setAutoDraw(False)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in pipeiComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "pipei"-------
for thisComponent in pipeiComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "pipei" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "chengong"-------
continueRoutine = True
routineTimer.add(4.500000)
# update component parameters for each repeat
shuffle(playerlist)
randfake=playerlist.pop()

thisExp.addData('randfake',randfake)
randplayer1 = '匹配成功\n\n您将与[' + str(randfake)
randplayer = randplayer1 +'玩家]共同完成游戏\n\n游戏即将开始，请做好准备'


if randfake == '红方':
    fakepic = 'thirdphoto/gamer_hong.PNG'
elif randfake == '黄方':
    fakepic = 'thirdphoto/gamer_huang.PNG'
else :
    fakepic = 'thirdphoto/gamer_lan.PNG'
image_9.setImage(fakepic)
text_6.setText(randplayer)
# keep track of which components have finished
chengongComponents = [image_9, text_6]
for thisComponent in chengongComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
chengongClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "chengong"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = chengongClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=chengongClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *image_9* updates
    if image_9.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_9.frameNStart = frameN  # exact frame index
        image_9.tStart = t  # local t and not account for scr refresh
        image_9.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_9, 'tStartRefresh')  # time at next scr refresh
        image_9.setAutoDraw(True)
    if image_9.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > image_9.tStartRefresh + 4.5-frameTolerance:
            # keep track of stop time/frame for later
            image_9.tStop = t  # not accounting for scr refresh
            image_9.frameNStop = frameN  # exact frame index
            win.timeOnFlip(image_9, 'tStopRefresh')  # time at next scr refresh
            image_9.setAutoDraw(False)
    
    # *text_6* updates
    if text_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_6.frameNStart = frameN  # exact frame index
        text_6.tStart = t  # local t and not account for scr refresh
        text_6.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_6, 'tStartRefresh')  # time at next scr refresh
        text_6.setAutoDraw(True)
    if text_6.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > text_6.tStartRefresh + 4.5-frameTolerance:
            # keep track of stop time/frame for later
            text_6.tStop = t  # not accounting for scr refresh
            text_6.frameNStop = frameN  # exact frame index
            win.timeOnFlip(text_6, 'tStopRefresh')  # time at next scr refresh
            text_6.setAutoDraw(False)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in chengongComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "chengong"-------
for thisComponent in chengongComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)

# ------Prepare to start Routine "start"-------
continueRoutine = True
routineTimer.add(2.000000)
# update component parameters for each repeat
# keep track of which components have finished
startComponents = [text_3]
for thisComponent in startComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
startClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "start"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = startClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=startClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_3* updates
    if text_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_3.frameNStart = frameN  # exact frame index
        text_3.tStart = t  # local t and not account for scr refresh
        text_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_3, 'tStartRefresh')  # time at next scr refresh
        text_3.setAutoDraw(True)
    if text_3.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > text_3.tStartRefresh + 2-frameTolerance:
            # keep track of stop time/frame for later
            text_3.tStop = t  # not accounting for scr refresh
            text_3.frameNStop = frameN  # exact frame index
            win.timeOnFlip(text_3, 'tStopRefresh')  # time at next scr refresh
            text_3.setAutoDraw(False)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in startComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "start"-------
for thisComponent in startComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)

# set up handler to look after randomisation of conditions etc
trials = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('conditiontest.xlsx'),
    seed=None, name='trials')
thisExp.addLoop(trials)  # add the loop to the experiment
thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
if thisTrial != None:
    for paramName in thisTrial:
        exec('{} = thisTrial[paramName]'.format(paramName))

for thisTrial in trials:
    currentLoop = trials
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            exec('{} = thisTrial[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "fixation"-------
    continueRoutine = True
    # update component parameters for each repeat
    # keep track of which components have finished
    fixationComponents = [polygon]
    for thisComponent in fixationComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    fixationClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "fixation"-------
    while continueRoutine:
        # get current time
        t = fixationClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=fixationClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *polygon* updates
        if polygon.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon.frameNStart = frameN  # exact frame index
            polygon.tStart = t  # local t and not account for scr refresh
            polygon.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon, 'tStartRefresh')  # time at next scr refresh
            polygon.setAutoDraw(True)
        if polygon.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > polygon.tStartRefresh + 0.5+0.3*random()-frameTolerance:
                # keep track of stop time/frame for later
                polygon.tStop = t  # not accounting for scr refresh
                polygon.frameNStop = frameN  # exact frame index
                win.timeOnFlip(polygon, 'tStopRefresh')  # time at next scr refresh
                polygon.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in fixationComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "fixation"-------
    for thisComponent in fixationComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials.addData('polygon.started', polygon.tStartRefresh)
    trials.addData('polygon.stopped', polygon.tStopRefresh)
    # the Routine "fixation" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "trial"-------
    continueRoutine = True
    # update component parameters for each repeat
    randomdot.setImage(imagefile)
    dot_resp.keys = []
    dot_resp.rt = []
    _dot_resp_allKeys = []
    number.setText(dotnum)
    # keep track of which components have finished
    trialComponents = [randomdot, more, less, dot_resp, F, J, redcircle, number]
    for thisComponent in trialComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    trialClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "trial"-------
    while continueRoutine:
        # get current time
        t = trialClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=trialClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *randomdot* updates
        if randomdot.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            randomdot.frameNStart = frameN  # exact frame index
            randomdot.tStart = t  # local t and not account for scr refresh
            randomdot.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(randomdot, 'tStartRefresh')  # time at next scr refresh
            randomdot.setAutoDraw(True)
        if randomdot.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > randomdot.tStartRefresh + 1.5-frameTolerance:
                # keep track of stop time/frame for later
                randomdot.tStop = t  # not accounting for scr refresh
                randomdot.frameNStop = frameN  # exact frame index
                win.timeOnFlip(randomdot, 'tStopRefresh')  # time at next scr refresh
                randomdot.setAutoDraw(False)
        
        # *more* updates
        if more.status == NOT_STARTED and tThisFlip >= 1.5-frameTolerance:
            # keep track of start time/frame for later
            more.frameNStart = frameN  # exact frame index
            more.tStart = t  # local t and not account for scr refresh
            more.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(more, 'tStartRefresh')  # time at next scr refresh
            more.setAutoDraw(True)
        
        # *less* updates
        if less.status == NOT_STARTED and tThisFlip >= 1.5-frameTolerance:
            # keep track of start time/frame for later
            less.frameNStart = frameN  # exact frame index
            less.tStart = t  # local t and not account for scr refresh
            less.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(less, 'tStartRefresh')  # time at next scr refresh
            less.setAutoDraw(True)
        
        # *dot_resp* updates
        waitOnFlip = False
        if dot_resp.status == NOT_STARTED and tThisFlip >= 1.5-frameTolerance:
            # keep track of start time/frame for later
            dot_resp.frameNStart = frameN  # exact frame index
            dot_resp.tStart = t  # local t and not account for scr refresh
            dot_resp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(dot_resp, 'tStartRefresh')  # time at next scr refresh
            dot_resp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(dot_resp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(dot_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if dot_resp.status == STARTED and not waitOnFlip:
            theseKeys = dot_resp.getKeys(keyList=['f', 'j'], waitRelease=False)
            _dot_resp_allKeys.extend(theseKeys)
            if len(_dot_resp_allKeys):
                dot_resp.keys = _dot_resp_allKeys[-1].name  # just the last key pressed
                dot_resp.rt = _dot_resp_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # *F* updates
        if F.status == NOT_STARTED and tThisFlip >= 1.5-frameTolerance:
            # keep track of start time/frame for later
            F.frameNStart = frameN  # exact frame index
            F.tStart = t  # local t and not account for scr refresh
            F.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(F, 'tStartRefresh')  # time at next scr refresh
            F.setAutoDraw(True)
        
        # *J* updates
        if J.status == NOT_STARTED and tThisFlip >= 1.5-frameTolerance:
            # keep track of start time/frame for later
            J.frameNStart = frameN  # exact frame index
            J.tStart = t  # local t and not account for scr refresh
            J.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(J, 'tStartRefresh')  # time at next scr refresh
            J.setAutoDraw(True)
        
        # *redcircle* updates
        if redcircle.status == NOT_STARTED and tThisFlip >= 1.5-frameTolerance:
            # keep track of start time/frame for later
            redcircle.frameNStart = frameN  # exact frame index
            redcircle.tStart = t  # local t and not account for scr refresh
            redcircle.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(redcircle, 'tStartRefresh')  # time at next scr refresh
            redcircle.setAutoDraw(True)
        
        # *number* updates
        if number.status == NOT_STARTED and tThisFlip >= 1.5-frameTolerance:
            # keep track of start time/frame for later
            number.frameNStart = frameN  # exact frame index
            number.tStart = t  # local t and not account for scr refresh
            number.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(number, 'tStartRefresh')  # time at next scr refresh
            number.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "trial"-------
    for thisComponent in trialComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if dot_resp.keys in ['', [], None]:  # No response was made
        dot_resp.keys = None
    trials.addData('dot_resp.keys',dot_resp.keys)
    if dot_resp.keys != None:  # we had a response
        trials.addData('dot_resp.rt', dot_resp.rt)
    trials.addData('dot_resp.started', dot_resp.tStartRefresh)
    trials.addData('dot_resp.stopped', dot_resp.tStopRefresh)
    # the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "randblank"-------
    continueRoutine = True
    # update component parameters for each repeat
    text_12.setText('')
    # keep track of which components have finished
    randblankComponents = [text_12]
    for thisComponent in randblankComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    randblankClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "randblank"-------
    while continueRoutine:
        # get current time
        t = randblankClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=randblankClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_12* updates
        if text_12.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_12.frameNStart = frameN  # exact frame index
            text_12.tStart = t  # local t and not account for scr refresh
            text_12.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_12, 'tStartRefresh')  # time at next scr refresh
            text_12.setAutoDraw(True)
        if text_12.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_12.tStartRefresh + 0.5+3*random()-frameTolerance:
                # keep track of stop time/frame for later
                text_12.tStop = t  # not accounting for scr refresh
                text_12.frameNStop = frameN  # exact frame index
                win.timeOnFlip(text_12, 'tStopRefresh')  # time at next scr refresh
                text_12.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in randblankComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "randblank"-------
    for thisComponent in randblankComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials.addData('text_12.started', text_12.tStartRefresh)
    trials.addData('text_12.stopped', text_12.tStopRefresh)
    # the Routine "randblank" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "feedback3"-------
    continueRoutine = True
    routineTimer.add(1.500000)
    # update component parameters for each repeat
    thisfeedback1=feedbacklist1.pop()
    thisfeedback2=feedbacklist2.pop()
    thisExp.addData('thisfeedback1',thisfeedback1)
    thisExp.addData('thisfeedback2',thisfeedback2)
    if thisfeedback1 == '正确' :
        feedcolor1 = 'green'
    else:
        feedcolor1 = 'red'
    if thisfeedback2 == '正确' :
        feedcolor2 = 'green'
    else:
        feedcolor2 = 'red'
    
    realfeed11 ='您[' + str(selectedcolor)
    realfeed1 = realfeed11 + '玩家]估计'
    realfeed22 ='伙伴[' + str(randfake)
    realfeed2 = realfeed22 + '玩家]估计'
    
    if (thisfeedback1 == '正确') and (thisfeedback2 == '正确'):
        getcoin = '本轮获得5个金币'
    else:
        getcoin = '本轮未获得金币'
    text_4.setText(realfeed1)
    text_8.setText(realfeed2)
    player1_TF.setColor(feedcolor1, colorSpace='rgb')
    player1_TF.setText(thisfeedback1)
    player2_TF.setColor(feedcolor2, colorSpace='rgb')
    player2_TF.setText(thisfeedback2)
    text_35.setText(getcoin
)
    # keep track of which components have finished
    feedback3Components = [text_4, text_8, player1_TF, player2_TF, text_35]
    for thisComponent in feedback3Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    feedback3Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "feedback3"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = feedback3Clock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=feedback3Clock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_4* updates
        if text_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_4.frameNStart = frameN  # exact frame index
            text_4.tStart = t  # local t and not account for scr refresh
            text_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_4, 'tStartRefresh')  # time at next scr refresh
            text_4.setAutoDraw(True)
        if text_4.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_4.tStartRefresh + 1.5-frameTolerance:
                # keep track of stop time/frame for later
                text_4.tStop = t  # not accounting for scr refresh
                text_4.frameNStop = frameN  # exact frame index
                win.timeOnFlip(text_4, 'tStopRefresh')  # time at next scr refresh
                text_4.setAutoDraw(False)
        
        # *text_8* updates
        if text_8.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_8.frameNStart = frameN  # exact frame index
            text_8.tStart = t  # local t and not account for scr refresh
            text_8.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_8, 'tStartRefresh')  # time at next scr refresh
            text_8.setAutoDraw(True)
        if text_8.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_8.tStartRefresh + 1.5-frameTolerance:
                # keep track of stop time/frame for later
                text_8.tStop = t  # not accounting for scr refresh
                text_8.frameNStop = frameN  # exact frame index
                win.timeOnFlip(text_8, 'tStopRefresh')  # time at next scr refresh
                text_8.setAutoDraw(False)
        
        # *player1_TF* updates
        if player1_TF.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            player1_TF.frameNStart = frameN  # exact frame index
            player1_TF.tStart = t  # local t and not account for scr refresh
            player1_TF.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(player1_TF, 'tStartRefresh')  # time at next scr refresh
            player1_TF.setAutoDraw(True)
        if player1_TF.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > player1_TF.tStartRefresh + 1.5-frameTolerance:
                # keep track of stop time/frame for later
                player1_TF.tStop = t  # not accounting for scr refresh
                player1_TF.frameNStop = frameN  # exact frame index
                win.timeOnFlip(player1_TF, 'tStopRefresh')  # time at next scr refresh
                player1_TF.setAutoDraw(False)
        
        # *player2_TF* updates
        if player2_TF.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            player2_TF.frameNStart = frameN  # exact frame index
            player2_TF.tStart = t  # local t and not account for scr refresh
            player2_TF.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(player2_TF, 'tStartRefresh')  # time at next scr refresh
            player2_TF.setAutoDraw(True)
        if player2_TF.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > player2_TF.tStartRefresh + 1.5-frameTolerance:
                # keep track of stop time/frame for later
                player2_TF.tStop = t  # not accounting for scr refresh
                player2_TF.frameNStop = frameN  # exact frame index
                win.timeOnFlip(player2_TF, 'tStopRefresh')  # time at next scr refresh
                player2_TF.setAutoDraw(False)
        
        # *text_35* updates
        if text_35.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_35.frameNStart = frameN  # exact frame index
            text_35.tStart = t  # local t and not account for scr refresh
            text_35.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_35, 'tStartRefresh')  # time at next scr refresh
            text_35.setAutoDraw(True)
        if text_35.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_35.tStartRefresh + 1.5-frameTolerance:
                # keep track of stop time/frame for later
                text_35.tStop = t  # not accounting for scr refresh
                text_35.frameNStop = frameN  # exact frame index
                win.timeOnFlip(text_35, 'tStopRefresh')  # time at next scr refresh
                text_35.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in feedback3Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "feedback3"-------
    for thisComponent in feedback3Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials.addData('text_4.started', text_4.tStartRefresh)
    trials.addData('text_4.stopped', text_4.tStopRefresh)
    trials.addData('text_8.started', text_8.tStartRefresh)
    trials.addData('text_8.stopped', text_8.tStopRefresh)
    trials.addData('player1_TF.started', player1_TF.tStartRefresh)
    trials.addData('player1_TF.stopped', player1_TF.tStopRefresh)
    trials.addData('player2_TF.started', player2_TF.tStartRefresh)
    trials.addData('player2_TF.stopped', player2_TF.tStopRefresh)
    trials.addData('text_35.started', text_35.tStartRefresh)
    trials.addData('text_35.stopped', text_35.tStopRefresh)
    
    # ------Prepare to start Routine "ITI"-------
    continueRoutine = True
    routineTimer.add(0.800000)
    # update component parameters for each repeat
    # keep track of which components have finished
    ITIComponents = [kongping]
    for thisComponent in ITIComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    ITIClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "ITI"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = ITIClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=ITIClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *kongping* updates
        if kongping.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            kongping.frameNStart = frameN  # exact frame index
            kongping.tStart = t  # local t and not account for scr refresh
            kongping.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(kongping, 'tStartRefresh')  # time at next scr refresh
            kongping.setAutoDraw(True)
        if kongping.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > kongping.tStartRefresh + 0.8-frameTolerance:
                # keep track of stop time/frame for later
                kongping.tStop = t  # not accounting for scr refresh
                kongping.frameNStop = frameN  # exact frame index
                win.timeOnFlip(kongping, 'tStopRefresh')  # time at next scr refresh
                kongping.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in ITIComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "ITI"-------
    for thisComponent in ITIComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'trials'


# ------Prepare to start Routine "tongjia"-------
continueRoutine = True
routineTimer.add(3.000000)
# update component parameters for each repeat
# keep track of which components have finished
tongjiaComponents = [text_10]
for thisComponent in tongjiaComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
tongjiaClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "tongjia"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = tongjiaClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=tongjiaClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_10* updates
    if text_10.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_10.frameNStart = frameN  # exact frame index
        text_10.tStart = t  # local t and not account for scr refresh
        text_10.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_10, 'tStartRefresh')  # time at next scr refresh
        text_10.setAutoDraw(True)
    if text_10.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > text_10.tStartRefresh + 3-frameTolerance:
            # keep track of stop time/frame for later
            text_10.tStop = t  # not accounting for scr refresh
            text_10.frameNStop = frameN  # exact frame index
            win.timeOnFlip(text_10, 'tStopRefresh')  # time at next scr refresh
            text_10.setAutoDraw(False)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in tongjiaComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "tongjia"-------
for thisComponent in tongjiaComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)

# ------Prepare to start Routine "jieguonene"-------
continueRoutine = True
# update component parameters for each repeat
ends_resp.keys = []
ends_resp.rt = []
_ends_resp_allKeys = []
# keep track of which components have finished
jieguoneneComponents = [ends_resp, image_2]
for thisComponent in jieguoneneComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
jieguoneneClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "jieguonene"-------
while continueRoutine:
    # get current time
    t = jieguoneneClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=jieguoneneClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *ends_resp* updates
    waitOnFlip = False
    if ends_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        ends_resp.frameNStart = frameN  # exact frame index
        ends_resp.tStart = t  # local t and not account for scr refresh
        ends_resp.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(ends_resp, 'tStartRefresh')  # time at next scr refresh
        ends_resp.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(ends_resp.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(ends_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if ends_resp.status == STARTED and not waitOnFlip:
        theseKeys = ends_resp.getKeys(keyList=['space'], waitRelease=False)
        _ends_resp_allKeys.extend(theseKeys)
        if len(_ends_resp_allKeys):
            ends_resp.keys = _ends_resp_allKeys[-1].name  # just the last key pressed
            ends_resp.rt = _ends_resp_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # *image_2* updates
    if image_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_2.frameNStart = frameN  # exact frame index
        image_2.tStart = t  # local t and not account for scr refresh
        image_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_2, 'tStartRefresh')  # time at next scr refresh
        image_2.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in jieguoneneComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "jieguonene"-------
for thisComponent in jieguoneneComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if ends_resp.keys in ['', [], None]:  # No response was made
    ends_resp.keys = None
thisExp.addData('ends_resp.keys',ends_resp.keys)
if ends_resp.keys != None:  # we had a response
    thisExp.addData('ends_resp.rt', ends_resp.rt)
thisExp.nextEntry()
# the Routine "jieguonene" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "guilt1"-------
continueRoutine = True
# update component parameters for each repeat
guilt1_ping_5.keys = []
guilt1_ping_5.rt = []
_guilt1_ping_5_allKeys = []
# keep track of which components have finished
guilt1Components = [image_5, guilt1_ping_5]
for thisComponent in guilt1Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
guilt1Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "guilt1"-------
while continueRoutine:
    # get current time
    t = guilt1Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=guilt1Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *image_5* updates
    if image_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_5.frameNStart = frameN  # exact frame index
        image_5.tStart = t  # local t and not account for scr refresh
        image_5.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_5, 'tStartRefresh')  # time at next scr refresh
        image_5.setAutoDraw(True)
    
    # *guilt1_ping_5* updates
    waitOnFlip = False
    if guilt1_ping_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        guilt1_ping_5.frameNStart = frameN  # exact frame index
        guilt1_ping_5.tStart = t  # local t and not account for scr refresh
        guilt1_ping_5.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(guilt1_ping_5, 'tStartRefresh')  # time at next scr refresh
        guilt1_ping_5.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(guilt1_ping_5.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(guilt1_ping_5.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if guilt1_ping_5.status == STARTED and not waitOnFlip:
        theseKeys = guilt1_ping_5.getKeys(keyList=['1', '2', '3', '4', '5', '6', '7'], waitRelease=False)
        _guilt1_ping_5_allKeys.extend(theseKeys)
        if len(_guilt1_ping_5_allKeys):
            guilt1_ping_5.keys = _guilt1_ping_5_allKeys[-1].name  # just the last key pressed
            guilt1_ping_5.rt = _guilt1_ping_5_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in guilt1Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "guilt1"-------
for thisComponent in guilt1Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if guilt1_ping_5.keys in ['', [], None]:  # No response was made
    guilt1_ping_5.keys = None
thisExp.addData('guilt1_ping_5.keys',guilt1_ping_5.keys)
if guilt1_ping_5.keys != None:  # we had a response
    thisExp.addData('guilt1_ping_5.rt', guilt1_ping_5.rt)
thisExp.addData('guilt1_ping_5.started', guilt1_ping_5.tStartRefresh)
thisExp.addData('guilt1_ping_5.stopped', guilt1_ping_5.tStopRefresh)
thisExp.nextEntry()
# the Routine "guilt1" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "ceshi"-------
continueRoutine = True
# update component parameters for each repeat
wanjia_name_6.keys = []
wanjia_name_6.rt = []
_wanjia_name_6_allKeys = []
# keep track of which components have finished
ceshiComponents = [image_6, wanjia_name_6]
for thisComponent in ceshiComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
ceshiClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "ceshi"-------
while continueRoutine:
    # get current time
    t = ceshiClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=ceshiClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *image_6* updates
    if image_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_6.frameNStart = frameN  # exact frame index
        image_6.tStart = t  # local t and not account for scr refresh
        image_6.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_6, 'tStartRefresh')  # time at next scr refresh
        image_6.setAutoDraw(True)
    
    # *wanjia_name_6* updates
    waitOnFlip = False
    if wanjia_name_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        wanjia_name_6.frameNStart = frameN  # exact frame index
        wanjia_name_6.tStart = t  # local t and not account for scr refresh
        wanjia_name_6.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(wanjia_name_6, 'tStartRefresh')  # time at next scr refresh
        wanjia_name_6.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(wanjia_name_6.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(wanjia_name_6.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if wanjia_name_6.status == STARTED and not waitOnFlip:
        theseKeys = wanjia_name_6.getKeys(keyList=['1', '2', '3', '4', '5', '6'], waitRelease=False)
        _wanjia_name_6_allKeys.extend(theseKeys)
        if len(_wanjia_name_6_allKeys):
            wanjia_name_6.keys = _wanjia_name_6_allKeys[-1].name  # just the last key pressed
            wanjia_name_6.rt = _wanjia_name_6_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in ceshiComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "ceshi"-------
for thisComponent in ceshiComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if wanjia_name_6.keys in ['', [], None]:  # No response was made
    wanjia_name_6.keys = None
thisExp.addData('wanjia_name_6.keys',wanjia_name_6.keys)
if wanjia_name_6.keys != None:  # we had a response
    thisExp.addData('wanjia_name_6.rt', wanjia_name_6.rt)
thisExp.addData('wanjia_name_6.started', wanjia_name_6.tStartRefresh)
thisExp.addData('wanjia_name_6.stopped', wanjia_name_6.tStopRefresh)
thisExp.nextEntry()
# the Routine "ceshi" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "chengshangqixia"-------
continueRoutine = True
routineTimer.add(3.000000)
# update component parameters for each repeat
# keep track of which components have finished
chengshangqixiaComponents = [text_2]
for thisComponent in chengshangqixiaComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
chengshangqixiaClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "chengshangqixia"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = chengshangqixiaClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=chengshangqixiaClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_2* updates
    if text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_2.frameNStart = frameN  # exact frame index
        text_2.tStart = t  # local t and not account for scr refresh
        text_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_2, 'tStartRefresh')  # time at next scr refresh
        text_2.setAutoDraw(True)
    if text_2.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > text_2.tStartRefresh + 3-frameTolerance:
            # keep track of stop time/frame for later
            text_2.tStop = t  # not accounting for scr refresh
            text_2.frameNStop = frameN  # exact frame index
            win.timeOnFlip(text_2, 'tStopRefresh')  # time at next scr refresh
            text_2.setAutoDraw(False)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in chengshangqixiaComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "chengshangqixia"-------
for thisComponent in chengshangqixiaComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)

# ------Prepare to start Routine "youxi2jieshao"-------
continueRoutine = True
routineTimer.add(5.500000)
# update component parameters for each repeat
jieshaotxt1 = '接下来，您和估计游戏的同伴[' + str(randfake)
jieshaotxt = jieshaotxt1 +'玩家]将\n\n与另一名玩家一起抽取金钱分配游戏中的角色'
text_11.setText(jieshaotxt)
# keep track of which components have finished
youxi2jieshaoComponents = [text_11]
for thisComponent in youxi2jieshaoComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
youxi2jieshaoClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "youxi2jieshao"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = youxi2jieshaoClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=youxi2jieshaoClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_11* updates
    if text_11.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_11.frameNStart = frameN  # exact frame index
        text_11.tStart = t  # local t and not account for scr refresh
        text_11.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_11, 'tStartRefresh')  # time at next scr refresh
        text_11.setAutoDraw(True)
    if text_11.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > text_11.tStartRefresh + 5.5-frameTolerance:
            # keep track of stop time/frame for later
            text_11.tStop = t  # not accounting for scr refresh
            text_11.frameNStop = frameN  # exact frame index
            win.timeOnFlip(text_11, 'tStopRefresh')  # time at next scr refresh
            text_11.setAutoDraw(False)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in youxi2jieshaoComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "youxi2jieshao"-------
for thisComponent in youxi2jieshaoComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)

# ------Prepare to start Routine "anotherwanjia"-------
continueRoutine = True
routineTimer.add(4.000000)
# update component parameters for each repeat
shuffle(playerlist)
randfake2 =playerlist.pop()

thisExp.addData('randfake2',randfake2)

gamer2txt1 = '另一名玩家为[' + str(randfake2)
gamer2txt2 = gamer2txt1 + '玩家]'


if randfake2 == '红方':
    fakepic2 = 'thirdphoto/gamer_hong.PNG'
elif randfake2 == '黄方':
    fakepic2 = 'thirdphoto/gamer_huang.PNG'
else :
    fakepic2 = 'thirdphoto/gamer_lan.PNG'
image_7.setImage(fakepic2)
text_16.setText(gamer2txt2)
# keep track of which components have finished
anotherwanjiaComponents = [image_7, text_16]
for thisComponent in anotherwanjiaComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
anotherwanjiaClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "anotherwanjia"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = anotherwanjiaClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=anotherwanjiaClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *image_7* updates
    if image_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_7.frameNStart = frameN  # exact frame index
        image_7.tStart = t  # local t and not account for scr refresh
        image_7.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_7, 'tStartRefresh')  # time at next scr refresh
        image_7.setAutoDraw(True)
    if image_7.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > image_7.tStartRefresh + 4-frameTolerance:
            # keep track of stop time/frame for later
            image_7.tStop = t  # not accounting for scr refresh
            image_7.frameNStop = frameN  # exact frame index
            win.timeOnFlip(image_7, 'tStopRefresh')  # time at next scr refresh
            image_7.setAutoDraw(False)
    
    # *text_16* updates
    if text_16.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_16.frameNStart = frameN  # exact frame index
        text_16.tStart = t  # local t and not account for scr refresh
        text_16.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_16, 'tStartRefresh')  # time at next scr refresh
        text_16.setAutoDraw(True)
    if text_16.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > text_16.tStartRefresh + 4-frameTolerance:
            # keep track of stop time/frame for later
            text_16.tStop = t  # not accounting for scr refresh
            text_16.frameNStop = frameN  # exact frame index
            win.timeOnFlip(text_16, 'tStopRefresh')  # time at next scr refresh
            text_16.setAutoDraw(False)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in anotherwanjiaComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "anotherwanjia"-------
for thisComponent in anotherwanjiaComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)

# ------Prepare to start Routine "chouxuanren1"-------
continueRoutine = True
routineTimer.add(7.000000)
# update component parameters for each repeat
chouxuantxt1 = '现在，系统将从[' + str(selectedcolor)
chouxuantxt2 = '玩家]、[' + str(randfake)
chouxuantxt3 = '玩家]、[' + str(randfake2)
chouxuantxt4 = '玩家]中'
chouxuantxt =chouxuantxt1 + chouxuantxt2 +chouxuantxt3 + chouxuantxt4








text_13.setText(chouxuantxt 
)
# keep track of which components have finished
chouxuanren1Components = [text_13, text_23, text_17]
for thisComponent in chouxuanren1Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
chouxuanren1Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "chouxuanren1"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = chouxuanren1Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=chouxuanren1Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_13* updates
    if text_13.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_13.frameNStart = frameN  # exact frame index
        text_13.tStart = t  # local t and not account for scr refresh
        text_13.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_13, 'tStartRefresh')  # time at next scr refresh
        text_13.setAutoDraw(True)
    if text_13.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > text_13.tStartRefresh + 7-frameTolerance:
            # keep track of stop time/frame for later
            text_13.tStop = t  # not accounting for scr refresh
            text_13.frameNStop = frameN  # exact frame index
            win.timeOnFlip(text_13, 'tStopRefresh')  # time at next scr refresh
            text_13.setAutoDraw(False)
    
    # *text_23* updates
    if text_23.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_23.frameNStart = frameN  # exact frame index
        text_23.tStart = t  # local t and not account for scr refresh
        text_23.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_23, 'tStartRefresh')  # time at next scr refresh
        text_23.setAutoDraw(True)
    if text_23.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > text_23.tStartRefresh + 7-frameTolerance:
            # keep track of stop time/frame for later
            text_23.tStop = t  # not accounting for scr refresh
            text_23.frameNStop = frameN  # exact frame index
            win.timeOnFlip(text_23, 'tStopRefresh')  # time at next scr refresh
            text_23.setAutoDraw(False)
    
    # *text_17* updates
    if text_17.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_17.frameNStart = frameN  # exact frame index
        text_17.tStart = t  # local t and not account for scr refresh
        text_17.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_17, 'tStartRefresh')  # time at next scr refresh
        text_17.setAutoDraw(True)
    if text_17.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > text_17.tStartRefresh + 7-frameTolerance:
            # keep track of stop time/frame for later
            text_17.tStop = t  # not accounting for scr refresh
            text_17.frameNStop = frameN  # exact frame index
            win.timeOnFlip(text_17, 'tStopRefresh')  # time at next scr refresh
            text_17.setAutoDraw(False)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in chouxuanren1Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "chouxuanren1"-------
for thisComponent in chouxuanren1Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)

# ------Prepare to start Routine "chouzhongjiemian2"-------
continueRoutine = True
# update component parameters for each repeat
chouzhongtxt1 = str(randfake) + '玩家  【分配者角色】'
chouzhongtxt2 = str(randfake2) + '玩家  【接受者角色】'
text_18.setText(chouzhongtxt1)
text_19.setText(chouzhongtxt2)
key_resp_10.keys = []
key_resp_10.rt = []
_key_resp_10_allKeys = []
# keep track of which components have finished
chouzhongjiemian2Components = [text_14, text_18, text_19, text_20, text_21, key_resp_10]
for thisComponent in chouzhongjiemian2Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
chouzhongjiemian2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "chouzhongjiemian2"-------
while continueRoutine:
    # get current time
    t = chouzhongjiemian2Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=chouzhongjiemian2Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_14* updates
    if text_14.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_14.frameNStart = frameN  # exact frame index
        text_14.tStart = t  # local t and not account for scr refresh
        text_14.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_14, 'tStartRefresh')  # time at next scr refresh
        text_14.setAutoDraw(True)
    
    # *text_18* updates
    if text_18.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_18.frameNStart = frameN  # exact frame index
        text_18.tStart = t  # local t and not account for scr refresh
        text_18.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_18, 'tStartRefresh')  # time at next scr refresh
        text_18.setAutoDraw(True)
    
    # *text_19* updates
    if text_19.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_19.frameNStart = frameN  # exact frame index
        text_19.tStart = t  # local t and not account for scr refresh
        text_19.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_19, 'tStartRefresh')  # time at next scr refresh
        text_19.setAutoDraw(True)
    
    # *text_20* updates
    if text_20.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_20.frameNStart = frameN  # exact frame index
        text_20.tStart = t  # local t and not account for scr refresh
        text_20.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_20, 'tStartRefresh')  # time at next scr refresh
        text_20.setAutoDraw(True)
    
    # *text_21* updates
    if text_21.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_21.frameNStart = frameN  # exact frame index
        text_21.tStart = t  # local t and not account for scr refresh
        text_21.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_21, 'tStartRefresh')  # time at next scr refresh
        text_21.setAutoDraw(True)
    
    # *key_resp_10* updates
    waitOnFlip = False
    if key_resp_10.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_10.frameNStart = frameN  # exact frame index
        key_resp_10.tStart = t  # local t and not account for scr refresh
        key_resp_10.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_10, 'tStartRefresh')  # time at next scr refresh
        key_resp_10.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_10.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_10.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_10.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_10.getKeys(keyList=['q'], waitRelease=False)
        _key_resp_10_allKeys.extend(theseKeys)
        if len(_key_resp_10_allKeys):
            key_resp_10.keys = _key_resp_10_allKeys[-1].name  # just the last key pressed
            key_resp_10.rt = _key_resp_10_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in chouzhongjiemian2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "chouzhongjiemian2"-------
for thisComponent in chouzhongjiemian2Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if key_resp_10.keys in ['', [], None]:  # No response was made
    key_resp_10.keys = None
thisExp.addData('key_resp_10.keys',key_resp_10.keys)
if key_resp_10.keys != None:  # we had a response
    thisExp.addData('key_resp_10.rt', key_resp_10.rt)
thisExp.nextEntry()
# the Routine "chouzhongjiemian2" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "guize1"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_111.keys = []
key_resp_111.rt = []
_key_resp_111_allKeys = []
# keep track of which components have finished
guize1Components = [image_116, key_resp_111]
for thisComponent in guize1Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
guize1Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "guize1"-------
while continueRoutine:
    # get current time
    t = guize1Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=guize1Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *image_116* updates
    if image_116.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_116.frameNStart = frameN  # exact frame index
        image_116.tStart = t  # local t and not account for scr refresh
        image_116.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_116, 'tStartRefresh')  # time at next scr refresh
        image_116.setAutoDraw(True)
    
    # *key_resp_111* updates
    waitOnFlip = False
    if key_resp_111.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
        # keep track of start time/frame for later
        key_resp_111.frameNStart = frameN  # exact frame index
        key_resp_111.tStart = t  # local t and not account for scr refresh
        key_resp_111.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_111, 'tStartRefresh')  # time at next scr refresh
        key_resp_111.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_111.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_111.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_111.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_111.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_111_allKeys.extend(theseKeys)
        if len(_key_resp_111_allKeys):
            key_resp_111.keys = _key_resp_111_allKeys[-1].name  # just the last key pressed
            key_resp_111.rt = _key_resp_111_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in guize1Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "guize1"-------
for thisComponent in guize1Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if key_resp_111.keys in ['', [], None]:  # No response was made
    key_resp_111.keys = None
thisExp.addData('key_resp_111.keys',key_resp_111.keys)
if key_resp_111.keys != None:  # we had a response
    thisExp.addData('key_resp_111.rt', key_resp_111.rt)
thisExp.nextEntry()
# the Routine "guize1" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "guize2"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_112.keys = []
key_resp_112.rt = []
_key_resp_112_allKeys = []
# keep track of which components have finished
guize2Components = [image_117, key_resp_112]
for thisComponent in guize2Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
guize2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "guize2"-------
while continueRoutine:
    # get current time
    t = guize2Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=guize2Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *image_117* updates
    if image_117.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_117.frameNStart = frameN  # exact frame index
        image_117.tStart = t  # local t and not account for scr refresh
        image_117.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_117, 'tStartRefresh')  # time at next scr refresh
        image_117.setAutoDraw(True)
    
    # *key_resp_112* updates
    waitOnFlip = False
    if key_resp_112.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
        # keep track of start time/frame for later
        key_resp_112.frameNStart = frameN  # exact frame index
        key_resp_112.tStart = t  # local t and not account for scr refresh
        key_resp_112.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_112, 'tStartRefresh')  # time at next scr refresh
        key_resp_112.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_112.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_112.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_112.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_112.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_112_allKeys.extend(theseKeys)
        if len(_key_resp_112_allKeys):
            key_resp_112.keys = _key_resp_112_allKeys[-1].name  # just the last key pressed
            key_resp_112.rt = _key_resp_112_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in guize2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "guize2"-------
for thisComponent in guize2Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if key_resp_112.keys in ['', [], None]:  # No response was made
    key_resp_112.keys = None
thisExp.addData('key_resp_112.keys',key_resp_112.keys)
if key_resp_112.keys != None:  # we had a response
    thisExp.addData('key_resp_112.rt', key_resp_112.rt)
thisExp.nextEntry()
# the Routine "guize2" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "guize3"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_113.keys = []
key_resp_113.rt = []
_key_resp_113_allKeys = []
# keep track of which components have finished
guize3Components = [image_118, key_resp_113]
for thisComponent in guize3Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
guize3Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "guize3"-------
while continueRoutine:
    # get current time
    t = guize3Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=guize3Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *image_118* updates
    if image_118.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
        # keep track of start time/frame for later
        image_118.frameNStart = frameN  # exact frame index
        image_118.tStart = t  # local t and not account for scr refresh
        image_118.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_118, 'tStartRefresh')  # time at next scr refresh
        image_118.setAutoDraw(True)
    
    # *key_resp_113* updates
    waitOnFlip = False
    if key_resp_113.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
        # keep track of start time/frame for later
        key_resp_113.frameNStart = frameN  # exact frame index
        key_resp_113.tStart = t  # local t and not account for scr refresh
        key_resp_113.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_113, 'tStartRefresh')  # time at next scr refresh
        key_resp_113.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_113.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_113.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_113.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_113.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_113_allKeys.extend(theseKeys)
        if len(_key_resp_113_allKeys):
            key_resp_113.keys = _key_resp_113_allKeys[-1].name  # just the last key pressed
            key_resp_113.rt = _key_resp_113_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in guize3Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "guize3"-------
for thisComponent in guize3Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if key_resp_113.keys in ['', [], None]:  # No response was made
    key_resp_113.keys = None
thisExp.addData('key_resp_113.keys',key_resp_113.keys)
if key_resp_113.keys != None:  # we had a response
    thisExp.addData('key_resp_113.rt', key_resp_113.rt)
thisExp.nextEntry()
# the Routine "guize3" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "guize4"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_114.keys = []
key_resp_114.rt = []
_key_resp_114_allKeys = []
# keep track of which components have finished
guize4Components = [image_119, key_resp_114]
for thisComponent in guize4Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
guize4Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "guize4"-------
while continueRoutine:
    # get current time
    t = guize4Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=guize4Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *image_119* updates
    if image_119.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_119.frameNStart = frameN  # exact frame index
        image_119.tStart = t  # local t and not account for scr refresh
        image_119.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_119, 'tStartRefresh')  # time at next scr refresh
        image_119.setAutoDraw(True)
    
    # *key_resp_114* updates
    waitOnFlip = False
    if key_resp_114.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
        # keep track of start time/frame for later
        key_resp_114.frameNStart = frameN  # exact frame index
        key_resp_114.tStart = t  # local t and not account for scr refresh
        key_resp_114.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_114, 'tStartRefresh')  # time at next scr refresh
        key_resp_114.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_114.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_114.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_114.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_114.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_114_allKeys.extend(theseKeys)
        if len(_key_resp_114_allKeys):
            key_resp_114.keys = _key_resp_114_allKeys[-1].name  # just the last key pressed
            key_resp_114.rt = _key_resp_114_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in guize4Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "guize4"-------
for thisComponent in guize4Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if key_resp_114.keys in ['', [], None]:  # No response was made
    key_resp_114.keys = None
thisExp.addData('key_resp_114.keys',key_resp_114.keys)
if key_resp_114.keys != None:  # we had a response
    thisExp.addData('key_resp_114.rt', key_resp_114.rt)
thisExp.nextEntry()
# the Routine "guize4" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "guize5"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_115.keys = []
key_resp_115.rt = []
_key_resp_115_allKeys = []
# keep track of which components have finished
guize5Components = [image_120, key_resp_115]
for thisComponent in guize5Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
guize5Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "guize5"-------
while continueRoutine:
    # get current time
    t = guize5Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=guize5Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *image_120* updates
    if image_120.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_120.frameNStart = frameN  # exact frame index
        image_120.tStart = t  # local t and not account for scr refresh
        image_120.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_120, 'tStartRefresh')  # time at next scr refresh
        image_120.setAutoDraw(True)
    
    # *key_resp_115* updates
    waitOnFlip = False
    if key_resp_115.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
        # keep track of start time/frame for later
        key_resp_115.frameNStart = frameN  # exact frame index
        key_resp_115.tStart = t  # local t and not account for scr refresh
        key_resp_115.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_115, 'tStartRefresh')  # time at next scr refresh
        key_resp_115.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_115.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_115.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_115.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_115.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_115_allKeys.extend(theseKeys)
        if len(_key_resp_115_allKeys):
            key_resp_115.keys = _key_resp_115_allKeys[-1].name  # just the last key pressed
            key_resp_115.rt = _key_resp_115_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in guize5Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "guize5"-------
for thisComponent in guize5Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if key_resp_115.keys in ['', [], None]:  # No response was made
    key_resp_115.keys = None
thisExp.addData('key_resp_115.keys',key_resp_115.keys)
if key_resp_115.keys != None:  # we had a response
    thisExp.addData('key_resp_115.rt', key_resp_115.rt)
thisExp.nextEntry()
# the Routine "guize5" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "guize6"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_116.keys = []
key_resp_116.rt = []
_key_resp_116_allKeys = []
# keep track of which components have finished
guize6Components = [image_121, key_resp_116]
for thisComponent in guize6Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
guize6Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "guize6"-------
while continueRoutine:
    # get current time
    t = guize6Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=guize6Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *image_121* updates
    if image_121.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_121.frameNStart = frameN  # exact frame index
        image_121.tStart = t  # local t and not account for scr refresh
        image_121.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_121, 'tStartRefresh')  # time at next scr refresh
        image_121.setAutoDraw(True)
    
    # *key_resp_116* updates
    waitOnFlip = False
    if key_resp_116.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
        # keep track of start time/frame for later
        key_resp_116.frameNStart = frameN  # exact frame index
        key_resp_116.tStart = t  # local t and not account for scr refresh
        key_resp_116.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_116, 'tStartRefresh')  # time at next scr refresh
        key_resp_116.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_116.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_116.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_116.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_116.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_116_allKeys.extend(theseKeys)
        if len(_key_resp_116_allKeys):
            key_resp_116.keys = _key_resp_116_allKeys[-1].name  # just the last key pressed
            key_resp_116.rt = _key_resp_116_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in guize6Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "guize6"-------
for thisComponent in guize6Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if key_resp_116.keys in ['', [], None]:  # No response was made
    key_resp_116.keys = None
thisExp.addData('key_resp_116.keys',key_resp_116.keys)
if key_resp_116.keys != None:  # we had a response
    thisExp.addData('key_resp_116.rt', key_resp_116.rt)
thisExp.nextEntry()
# the Routine "guize6" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "guize7"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_117.keys = []
key_resp_117.rt = []
_key_resp_117_allKeys = []
# keep track of which components have finished
guize7Components = [image_122, image_123, image_124, key_resp_117]
for thisComponent in guize7Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
guize7Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "guize7"-------
while continueRoutine:
    # get current time
    t = guize7Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=guize7Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *image_122* updates
    if image_122.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_122.frameNStart = frameN  # exact frame index
        image_122.tStart = t  # local t and not account for scr refresh
        image_122.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_122, 'tStartRefresh')  # time at next scr refresh
        image_122.setAutoDraw(True)
    if image_122.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > image_122.tStartRefresh + 4.5-frameTolerance:
            # keep track of stop time/frame for later
            image_122.tStop = t  # not accounting for scr refresh
            image_122.frameNStop = frameN  # exact frame index
            win.timeOnFlip(image_122, 'tStopRefresh')  # time at next scr refresh
            image_122.setAutoDraw(False)
    
    # *image_123* updates
    if image_123.status == NOT_STARTED and tThisFlip >= 4.5-frameTolerance:
        # keep track of start time/frame for later
        image_123.frameNStart = frameN  # exact frame index
        image_123.tStart = t  # local t and not account for scr refresh
        image_123.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_123, 'tStartRefresh')  # time at next scr refresh
        image_123.setAutoDraw(True)
    if image_123.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > image_123.tStartRefresh + 6-frameTolerance:
            # keep track of stop time/frame for later
            image_123.tStop = t  # not accounting for scr refresh
            image_123.frameNStop = frameN  # exact frame index
            win.timeOnFlip(image_123, 'tStopRefresh')  # time at next scr refresh
            image_123.setAutoDraw(False)
    
    # *image_124* updates
    if image_124.status == NOT_STARTED and tThisFlip >= 10.5-frameTolerance:
        # keep track of start time/frame for later
        image_124.frameNStart = frameN  # exact frame index
        image_124.tStart = t  # local t and not account for scr refresh
        image_124.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_124, 'tStartRefresh')  # time at next scr refresh
        image_124.setAutoDraw(True)
    
    # *key_resp_117* updates
    waitOnFlip = False
    if key_resp_117.status == NOT_STARTED and tThisFlip >= 11.5-frameTolerance:
        # keep track of start time/frame for later
        key_resp_117.frameNStart = frameN  # exact frame index
        key_resp_117.tStart = t  # local t and not account for scr refresh
        key_resp_117.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_117, 'tStartRefresh')  # time at next scr refresh
        key_resp_117.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_117.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_117.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_117.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_117.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_117_allKeys.extend(theseKeys)
        if len(_key_resp_117_allKeys):
            key_resp_117.keys = _key_resp_117_allKeys[-1].name  # just the last key pressed
            key_resp_117.rt = _key_resp_117_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in guize7Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "guize7"-------
for thisComponent in guize7Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if key_resp_117.keys in ['', [], None]:  # No response was made
    key_resp_117.keys = None
thisExp.addData('key_resp_117.keys',key_resp_117.keys)
if key_resp_117.keys != None:  # we had a response
    thisExp.addData('key_resp_117.rt', key_resp_117.rt)
thisExp.nextEntry()
# the Routine "guize7" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "guize10"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_118.keys = []
key_resp_118.rt = []
_key_resp_118_allKeys = []
# keep track of which components have finished
guize10Components = [image_125, key_resp_118]
for thisComponent in guize10Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
guize10Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "guize10"-------
while continueRoutine:
    # get current time
    t = guize10Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=guize10Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *image_125* updates
    if image_125.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_125.frameNStart = frameN  # exact frame index
        image_125.tStart = t  # local t and not account for scr refresh
        image_125.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_125, 'tStartRefresh')  # time at next scr refresh
        image_125.setAutoDraw(True)
    
    # *key_resp_118* updates
    waitOnFlip = False
    if key_resp_118.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
        # keep track of start time/frame for later
        key_resp_118.frameNStart = frameN  # exact frame index
        key_resp_118.tStart = t  # local t and not account for scr refresh
        key_resp_118.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_118, 'tStartRefresh')  # time at next scr refresh
        key_resp_118.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_118.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_118.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_118.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_118.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_118_allKeys.extend(theseKeys)
        if len(_key_resp_118_allKeys):
            key_resp_118.keys = _key_resp_118_allKeys[-1].name  # just the last key pressed
            key_resp_118.rt = _key_resp_118_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in guize10Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "guize10"-------
for thisComponent in guize10Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if key_resp_118.keys in ['', [], None]:  # No response was made
    key_resp_118.keys = None
thisExp.addData('key_resp_118.keys',key_resp_118.keys)
if key_resp_118.keys != None:  # we had a response
    thisExp.addData('key_resp_118.rt', key_resp_118.rt)
thisExp.nextEntry()
# the Routine "guize10" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "guize12"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_119.keys = []
key_resp_119.rt = []
_key_resp_119_allKeys = []
# keep track of which components have finished
guize12Components = [image_126, image_127, key_resp_119]
for thisComponent in guize12Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
guize12Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "guize12"-------
while continueRoutine:
    # get current time
    t = guize12Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=guize12Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *image_126* updates
    if image_126.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_126.frameNStart = frameN  # exact frame index
        image_126.tStart = t  # local t and not account for scr refresh
        image_126.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_126, 'tStartRefresh')  # time at next scr refresh
        image_126.setAutoDraw(True)
    if image_126.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > image_126.tStartRefresh + 7.5-frameTolerance:
            # keep track of stop time/frame for later
            image_126.tStop = t  # not accounting for scr refresh
            image_126.frameNStop = frameN  # exact frame index
            win.timeOnFlip(image_126, 'tStopRefresh')  # time at next scr refresh
            image_126.setAutoDraw(False)
    
    # *image_127* updates
    if image_127.status == NOT_STARTED and tThisFlip >= 7.5-frameTolerance:
        # keep track of start time/frame for later
        image_127.frameNStart = frameN  # exact frame index
        image_127.tStart = t  # local t and not account for scr refresh
        image_127.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_127, 'tStartRefresh')  # time at next scr refresh
        image_127.setAutoDraw(True)
    
    # *key_resp_119* updates
    waitOnFlip = False
    if key_resp_119.status == NOT_STARTED and tThisFlip >= 8.5-frameTolerance:
        # keep track of start time/frame for later
        key_resp_119.frameNStart = frameN  # exact frame index
        key_resp_119.tStart = t  # local t and not account for scr refresh
        key_resp_119.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_119, 'tStartRefresh')  # time at next scr refresh
        key_resp_119.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_119.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_119.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_119.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_119.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_119_allKeys.extend(theseKeys)
        if len(_key_resp_119_allKeys):
            key_resp_119.keys = _key_resp_119_allKeys[-1].name  # just the last key pressed
            key_resp_119.rt = _key_resp_119_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in guize12Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "guize12"-------
for thisComponent in guize12Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if key_resp_119.keys in ['', [], None]:  # No response was made
    key_resp_119.keys = None
thisExp.addData('key_resp_119.keys',key_resp_119.keys)
if key_resp_119.keys != None:  # we had a response
    thisExp.addData('key_resp_119.rt', key_resp_119.rt)
thisExp.nextEntry()
# the Routine "guize12" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "dengdaifenpei"-------
continueRoutine = True
routineTimer.add(5.000000)
# update component parameters for each repeat
dengdaitxt1 = '现在请稍等片刻，等['+ str(randfake)
dengdaitxt = dengdaitxt1 + '玩家]提出方案后，'


text_15.setText(dengdaitxt
)
# keep track of which components have finished
dengdaifenpeiComponents = [text_15, text_22, text_25]
for thisComponent in dengdaifenpeiComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
dengdaifenpeiClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "dengdaifenpei"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = dengdaifenpeiClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=dengdaifenpeiClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_15* updates
    if text_15.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_15.frameNStart = frameN  # exact frame index
        text_15.tStart = t  # local t and not account for scr refresh
        text_15.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_15, 'tStartRefresh')  # time at next scr refresh
        text_15.setAutoDraw(True)
    if text_15.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > text_15.tStartRefresh + 5-frameTolerance:
            # keep track of stop time/frame for later
            text_15.tStop = t  # not accounting for scr refresh
            text_15.frameNStop = frameN  # exact frame index
            win.timeOnFlip(text_15, 'tStopRefresh')  # time at next scr refresh
            text_15.setAutoDraw(False)
    
    # *text_22* updates
    if text_22.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_22.frameNStart = frameN  # exact frame index
        text_22.tStart = t  # local t and not account for scr refresh
        text_22.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_22, 'tStartRefresh')  # time at next scr refresh
        text_22.setAutoDraw(True)
    if text_22.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > text_22.tStartRefresh + 5-frameTolerance:
            # keep track of stop time/frame for later
            text_22.tStop = t  # not accounting for scr refresh
            text_22.frameNStop = frameN  # exact frame index
            win.timeOnFlip(text_22, 'tStopRefresh')  # time at next scr refresh
            text_22.setAutoDraw(False)
    
    # *text_25* updates
    if text_25.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_25.frameNStart = frameN  # exact frame index
        text_25.tStart = t  # local t and not account for scr refresh
        text_25.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_25, 'tStartRefresh')  # time at next scr refresh
        text_25.setAutoDraw(True)
    if text_25.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > text_25.tStartRefresh + 5-frameTolerance:
            # keep track of stop time/frame for later
            text_25.tStop = t  # not accounting for scr refresh
            text_25.frameNStop = frameN  # exact frame index
            win.timeOnFlip(text_25, 'tStopRefresh')  # time at next scr refresh
            text_25.setAutoDraw(False)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in dengdaifenpeiComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "dengdaifenpei"-------
for thisComponent in dengdaifenpeiComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)

# ------Prepare to start Routine "fenpeijiemian"-------
continueRoutine = True
# update component parameters for each repeat
randnumfenpei = 5*random()
randintfenpei = 63 + int(randnumfenpei)
randintfenpei2 = 100 - randintfenpei

thisExp.addData('randintfenpei',randintfenpei)

fenpeizhetxt1 = str(randfake) + '玩家将获得'
fenpeizhetxt2 = str(randintfenpei) + '个金币'
fenpeizhetxt = fenpeizhetxt1 + fenpeizhetxt2

jieshouzhetxt1 = str(randfake2) + '玩家将获得'
jieshouzhetxt2 = str(randintfenpei2) + '个金币'
jieshouzhetxt = jieshouzhetxt1 + jieshouzhetxt2

if (randfake == '红方') and (randfake2 == '黄方'):
    fenpeipic = 'thirdphoto/fenpei_honghuang.PNG'
elif (randfake == '红方') and (randfake2 == '蓝方'):
    fenpeipic = 'thirdphoto/fenpei_honglan.PNG'
elif (randfake == '黄方') and (randfake2 == '红方'):
    fenpeipic = 'thirdphoto/fenpei_huanghong.PNG'
elif (randfake == '黄方') and (randfake2 == '蓝方'):
    fenpeipic = 'thirdphoto/fenpei_huanglan.PNG'
elif (randfake == '蓝方') and (randfake2 == '红方'):
    fenpeipic = 'thirdphoto/fenpei_lanhong.PNG'
else :
    fenpeipic = 'thirdphoto/fenpei_lanhuang.PNG'
image_11.setImage(fenpeipic)
text_26.setText(fenpeizhetxt)
text_27.setText(jieshouzhetxt)
key_resp_9.keys = []
key_resp_9.rt = []
_key_resp_9_allKeys = []
# keep track of which components have finished
fenpeijiemianComponents = [image_11, text_26, text_27, key_resp_9]
for thisComponent in fenpeijiemianComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
fenpeijiemianClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "fenpeijiemian"-------
while continueRoutine:
    # get current time
    t = fenpeijiemianClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=fenpeijiemianClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *image_11* updates
    if image_11.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_11.frameNStart = frameN  # exact frame index
        image_11.tStart = t  # local t and not account for scr refresh
        image_11.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_11, 'tStartRefresh')  # time at next scr refresh
        image_11.setAutoDraw(True)
    
    # *text_26* updates
    if text_26.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_26.frameNStart = frameN  # exact frame index
        text_26.tStart = t  # local t and not account for scr refresh
        text_26.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_26, 'tStartRefresh')  # time at next scr refresh
        text_26.setAutoDraw(True)
    
    # *text_27* updates
    if text_27.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_27.frameNStart = frameN  # exact frame index
        text_27.tStart = t  # local t and not account for scr refresh
        text_27.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_27, 'tStartRefresh')  # time at next scr refresh
        text_27.setAutoDraw(True)
    
    # *key_resp_9* updates
    waitOnFlip = False
    if key_resp_9.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_9.frameNStart = frameN  # exact frame index
        key_resp_9.tStart = t  # local t and not account for scr refresh
        key_resp_9.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_9, 'tStartRefresh')  # time at next scr refresh
        key_resp_9.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_9.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_9.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_9.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_9.getKeys(keyList=['f', 'j'], waitRelease=False)
        _key_resp_9_allKeys.extend(theseKeys)
        if len(_key_resp_9_allKeys):
            key_resp_9.keys = _key_resp_9_allKeys[-1].name  # just the last key pressed
            key_resp_9.rt = _key_resp_9_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in fenpeijiemianComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "fenpeijiemian"-------
for thisComponent in fenpeijiemianComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if key_resp_9.keys in ['', [], None]:  # No response was made
    key_resp_9.keys = None
thisExp.addData('key_resp_9.keys',key_resp_9.keys)
if key_resp_9.keys != None:  # we had a response
    thisExp.addData('key_resp_9.rt', key_resp_9.rt)
thisExp.addData('key_resp_9.started', key_resp_9.tStartRefresh)
thisExp.addData('key_resp_9.stopped', key_resp_9.tStopRefresh)
thisExp.nextEntry()
# the Routine "fenpeijiemian" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "punishslide"-------
continueRoutine = True
# update component parameters for each repeat
if key_resp_9.keys == 'j' :
    continueRoutine = False

if (randfake == '红方') and (randfake2 == '黄方'):
    slidefenpei = 'thirdphoto/wupei_honghuang.PNG'
elif (randfake == '红方') and (randfake2 == '蓝方'):
    slidefenpei = 'thirdphoto/wupei_honglan.PNG'
elif (randfake == '黄方') and (randfake2 == '红方'):
    slidefenpei = 'thirdphoto/wupei_huanghong.PNG'
elif (randfake == '黄方') and (randfake2 == '蓝方'):
    slidefenpei = 'thirdphoto/wupei_huanglan.PNG'
elif (randfake == '蓝方') and (randfake2 == '红方'):
    slidefenpei = 'thirdphoto/wupei_lanhong.PNG'
else :
    slidefenpei = 'thirdphoto/wupei_lanhuang.PNG'
image_12.setImage(slidefenpei)
slider.reset()
# setup some python lists for storing info about the mouse
mouse.x = []
mouse.y = []
mouse.leftButton = []
mouse.midButton = []
mouse.rightButton = []
mouse.time = []
mouse.clicked_name = []
gotValidClick = False  # until a click is received
text_33.setText(fenpeizhetxt)
text_34.setText(jieshouzhetxt)
# keep track of which components have finished
punishslideComponents = [image_12, slider, image_13, mouse, text_29, text_30, text_31, text_32, text_28, text_33, text_34]
for thisComponent in punishslideComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
punishslideClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "punishslide"-------
while continueRoutine:
    # get current time
    t = punishslideClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=punishslideClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *image_12* updates
    if image_12.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_12.frameNStart = frameN  # exact frame index
        image_12.tStart = t  # local t and not account for scr refresh
        image_12.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_12, 'tStartRefresh')  # time at next scr refresh
        image_12.setAutoDraw(True)
    
    # *slider* updates
    if slider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        slider.frameNStart = frameN  # exact frame index
        slider.tStart = t  # local t and not account for scr refresh
        slider.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(slider, 'tStartRefresh')  # time at next scr refresh
        slider.setAutoDraw(True)
    
    # *image_13* updates
    if image_13.status == NOT_STARTED and slider.rating:
        # keep track of start time/frame for later
        image_13.frameNStart = frameN  # exact frame index
        image_13.tStart = t  # local t and not account for scr refresh
        image_13.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_13, 'tStartRefresh')  # time at next scr refresh
        image_13.setAutoDraw(True)
    # *mouse* updates
    if mouse.status == NOT_STARTED and slider.rating:
        # keep track of start time/frame for later
        mouse.frameNStart = frameN  # exact frame index
        mouse.tStart = t  # local t and not account for scr refresh
        mouse.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(mouse, 'tStartRefresh')  # time at next scr refresh
        mouse.status = STARTED
        mouse.mouseClock.reset()
        prevButtonState = mouse.getPressed()  # if button is down already this ISN'T a new click
    if mouse.status == STARTED:  # only update if started and not finished!
        buttons = mouse.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                # check if the mouse was inside our 'clickable' objects
                gotValidClick = False
                try:
                    iter(image_13)
                    clickableList = image_13
                except:
                    clickableList = [image_13]
                for obj in clickableList:
                    if obj.contains(mouse):
                        gotValidClick = True
                        mouse.clicked_name.append(obj.name)
                x, y = mouse.getPos()
                mouse.x.append(x)
                mouse.y.append(y)
                buttons = mouse.getPressed()
                mouse.leftButton.append(buttons[0])
                mouse.midButton.append(buttons[1])
                mouse.rightButton.append(buttons[2])
                mouse.time.append(mouse.mouseClock.getTime())
                if gotValidClick:  # abort routine on response
                    continueRoutine = False
    punishnum = slider.rating
    punishnumint1 = int(punishnum or 0)
    punishnumint2 = 3*punishnumint1
    
    # *text_29* updates
    if text_29.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_29.frameNStart = frameN  # exact frame index
        text_29.tStart = t  # local t and not account for scr refresh
        text_29.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_29, 'tStartRefresh')  # time at next scr refresh
        text_29.setAutoDraw(True)
    if text_29.status == STARTED:  # only update if drawing
        text_29.setText(punishnumint1, log=False)
    
    # *text_30* updates
    if text_30.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_30.frameNStart = frameN  # exact frame index
        text_30.tStart = t  # local t and not account for scr refresh
        text_30.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_30, 'tStartRefresh')  # time at next scr refresh
        text_30.setAutoDraw(True)
    if text_30.status == STARTED:  # only update if drawing
        text_30.setText(punishnumint2, log=False)
    
    # *text_31* updates
    if text_31.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_31.frameNStart = frameN  # exact frame index
        text_31.tStart = t  # local t and not account for scr refresh
        text_31.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_31, 'tStartRefresh')  # time at next scr refresh
        text_31.setAutoDraw(True)
    
    # *text_32* updates
    if text_32.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_32.frameNStart = frameN  # exact frame index
        text_32.tStart = t  # local t and not account for scr refresh
        text_32.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_32, 'tStartRefresh')  # time at next scr refresh
        text_32.setAutoDraw(True)
    
    # *text_28* updates
    if text_28.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_28.frameNStart = frameN  # exact frame index
        text_28.tStart = t  # local t and not account for scr refresh
        text_28.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_28, 'tStartRefresh')  # time at next scr refresh
        text_28.setAutoDraw(True)
    
    # *text_33* updates
    if text_33.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_33.frameNStart = frameN  # exact frame index
        text_33.tStart = t  # local t and not account for scr refresh
        text_33.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_33, 'tStartRefresh')  # time at next scr refresh
        text_33.setAutoDraw(True)
    
    # *text_34* updates
    if text_34.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_34.frameNStart = frameN  # exact frame index
        text_34.tStart = t  # local t and not account for scr refresh
        text_34.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_34, 'tStartRefresh')  # time at next scr refresh
        text_34.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in punishslideComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "punishslide"-------
for thisComponent in punishslideComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('slider.response', slider.getRating())
thisExp.addData('slider.rt', slider.getRT())
thisExp.addData('slider.started', slider.tStartRefresh)
thisExp.addData('slider.stopped', slider.tStopRefresh)
# store data for thisExp (ExperimentHandler)
if len(mouse.x): thisExp.addData('mouse.x', mouse.x[0])
if len(mouse.y): thisExp.addData('mouse.y', mouse.y[0])
if len(mouse.leftButton): thisExp.addData('mouse.leftButton', mouse.leftButton[0])
if len(mouse.midButton): thisExp.addData('mouse.midButton', mouse.midButton[0])
if len(mouse.rightButton): thisExp.addData('mouse.rightButton', mouse.rightButton[0])
if len(mouse.time): thisExp.addData('mouse.time', mouse.time[0])
if len(mouse.clicked_name): thisExp.addData('mouse.clicked_name', mouse.clicked_name[0])
thisExp.nextEntry()
# the Routine "punishslide" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "guit2_rate"-------
continueRoutine = True
# update component parameters for each repeat
if randfake == '红方':
    houcepic = 'thirdphoto/neijiu2_hong.PNG'
elif randfake == '黄方':
    houcepic = 'thirdphoto/neijiu2_huang.PNG'
else :
    houcepic = 'thirdphoto/neijiu2_lan.PNG'
huobanchengxina_15.setImage(houcepic)
houceguilt2_rate.keys = []
houceguilt2_rate.rt = []
_houceguilt2_rate_allKeys = []
# keep track of which components have finished
guit2_rateComponents = [huobanchengxina_15, houceguilt2_rate]
for thisComponent in guit2_rateComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
guit2_rateClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "guit2_rate"-------
while continueRoutine:
    # get current time
    t = guit2_rateClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=guit2_rateClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *huobanchengxina_15* updates
    if huobanchengxina_15.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        huobanchengxina_15.frameNStart = frameN  # exact frame index
        huobanchengxina_15.tStart = t  # local t and not account for scr refresh
        huobanchengxina_15.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(huobanchengxina_15, 'tStartRefresh')  # time at next scr refresh
        huobanchengxina_15.setAutoDraw(True)
    
    # *houceguilt2_rate* updates
    waitOnFlip = False
    if houceguilt2_rate.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        houceguilt2_rate.frameNStart = frameN  # exact frame index
        houceguilt2_rate.tStart = t  # local t and not account for scr refresh
        houceguilt2_rate.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(houceguilt2_rate, 'tStartRefresh')  # time at next scr refresh
        houceguilt2_rate.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(houceguilt2_rate.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(houceguilt2_rate.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if houceguilt2_rate.status == STARTED and not waitOnFlip:
        theseKeys = houceguilt2_rate.getKeys(keyList=['1', '2', '3', '4', '5', '6', '7'], waitRelease=False)
        _houceguilt2_rate_allKeys.extend(theseKeys)
        if len(_houceguilt2_rate_allKeys):
            houceguilt2_rate.keys = _houceguilt2_rate_allKeys[-1].name  # just the last key pressed
            houceguilt2_rate.rt = _houceguilt2_rate_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in guit2_rateComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "guit2_rate"-------
for thisComponent in guit2_rateComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('huobanchengxina_15.started', huobanchengxina_15.tStartRefresh)
thisExp.addData('huobanchengxina_15.stopped', huobanchengxina_15.tStopRefresh)
# check responses
if houceguilt2_rate.keys in ['', [], None]:  # No response was made
    houceguilt2_rate.keys = None
thisExp.addData('houceguilt2_rate.keys',houceguilt2_rate.keys)
if houceguilt2_rate.keys != None:  # we had a response
    thisExp.addData('houceguilt2_rate.rt', houceguilt2_rate.rt)
thisExp.addData('houceguilt2_rate.started', houceguilt2_rate.tStartRefresh)
thisExp.addData('houceguilt2_rate.stopped', houceguilt2_rate.tStopRefresh)
thisExp.nextEntry()
# the Routine "guit2_rate" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "gundongfangan"-------
continueRoutine = True
routineTimer.add(13.000000)
# update component parameters for each repeat
# keep track of which components have finished
gundongfanganComponents = [image_131, image_128, image_129, image_130]
for thisComponent in gundongfanganComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
gundongfanganClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "gundongfangan"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = gundongfanganClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=gundongfanganClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *image_131* updates
    if image_131.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_131.frameNStart = frameN  # exact frame index
        image_131.tStart = t  # local t and not account for scr refresh
        image_131.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_131, 'tStartRefresh')  # time at next scr refresh
        image_131.setAutoDraw(True)
    if image_131.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > image_131.tStartRefresh + 4-frameTolerance:
            # keep track of stop time/frame for later
            image_131.tStop = t  # not accounting for scr refresh
            image_131.frameNStop = frameN  # exact frame index
            win.timeOnFlip(image_131, 'tStopRefresh')  # time at next scr refresh
            image_131.setAutoDraw(False)
    
    # *image_128* updates
    if image_128.status == NOT_STARTED and tThisFlip >= 4-frameTolerance:
        # keep track of start time/frame for later
        image_128.frameNStart = frameN  # exact frame index
        image_128.tStart = t  # local t and not account for scr refresh
        image_128.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_128, 'tStartRefresh')  # time at next scr refresh
        image_128.setAutoDraw(True)
    if image_128.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > image_128.tStartRefresh + 3-frameTolerance:
            # keep track of stop time/frame for later
            image_128.tStop = t  # not accounting for scr refresh
            image_128.frameNStop = frameN  # exact frame index
            win.timeOnFlip(image_128, 'tStopRefresh')  # time at next scr refresh
            image_128.setAutoDraw(False)
    
    # *image_129* updates
    if image_129.status == NOT_STARTED and tThisFlip >= 7-frameTolerance:
        # keep track of start time/frame for later
        image_129.frameNStart = frameN  # exact frame index
        image_129.tStart = t  # local t and not account for scr refresh
        image_129.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_129, 'tStartRefresh')  # time at next scr refresh
        image_129.setAutoDraw(True)
    if image_129.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > image_129.tStartRefresh + 3-frameTolerance:
            # keep track of stop time/frame for later
            image_129.tStop = t  # not accounting for scr refresh
            image_129.frameNStop = frameN  # exact frame index
            win.timeOnFlip(image_129, 'tStopRefresh')  # time at next scr refresh
            image_129.setAutoDraw(False)
    
    # *image_130* updates
    if image_130.status == NOT_STARTED and tThisFlip >= 10-frameTolerance:
        # keep track of start time/frame for later
        image_130.frameNStart = frameN  # exact frame index
        image_130.tStart = t  # local t and not account for scr refresh
        image_130.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_130, 'tStartRefresh')  # time at next scr refresh
        image_130.setAutoDraw(True)
    if image_130.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > image_130.tStartRefresh + 3-frameTolerance:
            # keep track of stop time/frame for later
            image_130.tStop = t  # not accounting for scr refresh
            image_130.frameNStop = frameN  # exact frame index
            win.timeOnFlip(image_130, 'tStopRefresh')  # time at next scr refresh
            image_130.setAutoDraw(False)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in gundongfanganComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "gundongfangan"-------
for thisComponent in gundongfanganComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)

# ------Prepare to start Routine "unfairrate"-------
continueRoutine = True
# update component parameters for each repeat
unfair_rate.keys = []
unfair_rate.rt = []
_unfair_rate_allKeys = []
# keep track of which components have finished
unfairrateComponents = [image_14, unfair_rate]
for thisComponent in unfairrateComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
unfairrateClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "unfairrate"-------
while continueRoutine:
    # get current time
    t = unfairrateClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=unfairrateClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *image_14* updates
    if image_14.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_14.frameNStart = frameN  # exact frame index
        image_14.tStart = t  # local t and not account for scr refresh
        image_14.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_14, 'tStartRefresh')  # time at next scr refresh
        image_14.setAutoDraw(True)
    
    # *unfair_rate* updates
    waitOnFlip = False
    if unfair_rate.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        unfair_rate.frameNStart = frameN  # exact frame index
        unfair_rate.tStart = t  # local t and not account for scr refresh
        unfair_rate.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(unfair_rate, 'tStartRefresh')  # time at next scr refresh
        unfair_rate.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(unfair_rate.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(unfair_rate.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if unfair_rate.status == STARTED and not waitOnFlip:
        theseKeys = unfair_rate.getKeys(keyList=['1', '2', '3', '4', '5', '6', '7'], waitRelease=False)
        _unfair_rate_allKeys.extend(theseKeys)
        if len(_unfair_rate_allKeys):
            unfair_rate.keys = _unfair_rate_allKeys[-1].name  # just the last key pressed
            unfair_rate.rt = _unfair_rate_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in unfairrateComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "unfairrate"-------
for thisComponent in unfairrateComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('image_14.started', image_14.tStartRefresh)
thisExp.addData('image_14.stopped', image_14.tStopRefresh)
# check responses
if unfair_rate.keys in ['', [], None]:  # No response was made
    unfair_rate.keys = None
thisExp.addData('unfair_rate.keys',unfair_rate.keys)
if unfair_rate.keys != None:  # we had a response
    thisExp.addData('unfair_rate.rt', unfair_rate.rt)
thisExp.addData('unfair_rate.started', unfair_rate.tStartRefresh)
thisExp.addData('unfair_rate.stopped', unfair_rate.tStopRefresh)
thisExp.nextEntry()
# the Routine "unfairrate" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "zuihoua"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_7.keys = []
key_resp_7.rt = []
_key_resp_7_allKeys = []
# keep track of which components have finished
zuihouaComponents = [key_resp_7, zuihounene]
for thisComponent in zuihouaComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
zuihouaClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "zuihoua"-------
while continueRoutine:
    # get current time
    t = zuihouaClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=zuihouaClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *key_resp_7* updates
    waitOnFlip = False
    if key_resp_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_7.frameNStart = frameN  # exact frame index
        key_resp_7.tStart = t  # local t and not account for scr refresh
        key_resp_7.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_7, 'tStartRefresh')  # time at next scr refresh
        key_resp_7.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_7.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_7.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_7.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_7.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_7_allKeys.extend(theseKeys)
        if len(_key_resp_7_allKeys):
            key_resp_7.keys = _key_resp_7_allKeys[-1].name  # just the last key pressed
            key_resp_7.rt = _key_resp_7_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # *zuihounene* updates
    if zuihounene.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        zuihounene.frameNStart = frameN  # exact frame index
        zuihounene.tStart = t  # local t and not account for scr refresh
        zuihounene.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(zuihounene, 'tStartRefresh')  # time at next scr refresh
        zuihounene.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in zuihouaComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "zuihoua"-------
for thisComponent in zuihouaComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if key_resp_7.keys in ['', [], None]:  # No response was made
    key_resp_7.keys = None
thisExp.addData('key_resp_7.keys',key_resp_7.keys)
if key_resp_7.keys != None:  # we had a response
    thisExp.addData('key_resp_7.rt', key_resp_7.rt)
thisExp.addData('key_resp_7.started', key_resp_7.tStartRefresh)
thisExp.addData('key_resp_7.stopped', key_resp_7.tStopRefresh)
thisExp.nextEntry()
# the Routine "zuihoua" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
