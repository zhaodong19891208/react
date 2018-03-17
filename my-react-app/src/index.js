import React from 'react';
import ReactDOM from 'react-dom';
import './css/reset.css'
import './css/border.css'
import registerServiceWorker from './registerServiceWorker';
import { Router, hashHistory } from 'react-router';
import routeConfig from './router';
import FastClick from 'fastclick';
FastClick.attach(document.body)

ReactDOM.render(
  <Router routes={routeConfig} history={hashHistory}></Router>
, document.getElementById('root'));
registerServiceWorker();



//                            _ooOoo_
//                           o8888888o
//                           88" . "88
//                           (| -_- |)
//                            O\ = /O
//                        ____/`---'\____
//                      .   ' \\| |// `.
//                       / \\||| : |||// \
//                     / _||||| -:- |||||- \
//                       | | \\\ - /// | |
//                     | \_| ''\---/'' | |
//                      \ .-\__ `-` ___/-. /
//                   ___`. .' /--.--\ `. . __
//                ."" '< `.___\_<|>_/___.' >'"".
//               | | : `- \`.;`\ _ /`;.`/ - ` : | |
//                 \ \ `-. \_ __\ /__ _/ .-` / /
//         ======`-.____`-.___\_____/___.-`____.-'======
//                            `=---='
//
//         .............................................
//                  佛祖保佑             永无BUG
