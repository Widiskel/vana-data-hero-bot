const a6_0x224308=a6_0x1a1c;(function(_0x4478bf,_0x3788a8){const _0x5c0081=a6_0x1a1c,_0x4923dc=_0x4478bf();while(!![]){try{const _0x348f3f=-parseInt(_0x5c0081(0x87))/0x1*(-parseInt(_0x5c0081(0x74))/0x2)+parseInt(_0x5c0081(0x7a))/0x3+-parseInt(_0x5c0081(0x83))/0x4*(parseInt(_0x5c0081(0x78))/0x5)+parseInt(_0x5c0081(0x86))/0x6*(parseInt(_0x5c0081(0x82))/0x7)+-parseInt(_0x5c0081(0x72))/0x8+parseInt(_0x5c0081(0x85))/0x9*(parseInt(_0x5c0081(0x81))/0xa)+parseInt(_0x5c0081(0x7f))/0xb*(-parseInt(_0x5c0081(0x75))/0xc);if(_0x348f3f===_0x3788a8)break;else _0x4923dc['push'](_0x4923dc['shift']());}catch(_0x2a96d1){_0x4923dc['push'](_0x4923dc['shift']());}}}(a6_0x152f,0x6a2e5));function a6_0x1a1c(_0xec5eed,_0x2d3dd8){const _0x152fe6=a6_0x152f();return a6_0x1a1c=function(_0x1a1ce7,_0x4e0233){_0x1a1ce7=_0x1a1ce7-0x71;let _0x2eb87e=_0x152fe6[_0x1a1ce7];return _0x2eb87e;},a6_0x1a1c(_0xec5eed,_0x2d3dd8);}import{createLogger,format,transports}from'winston';import a6_0x26df75 from'fs';const {combine,timestamp,printf,colorize}=format,customFormat=printf(({level:_0x20d8cf,message:_0x2437d3,timestamp:_0x386c9b})=>{const _0x401e12=a6_0x1a1c;return _0x386c9b+'\x20['+_0x20d8cf+_0x401e12(0x89)+_0x2437d3;});class Logger{constructor(){const _0x44295f=a6_0x1a1c;this[_0x44295f(0x79)]=createLogger({'level':_0x44295f(0x80),'format':combine(timestamp({'format':_0x44295f(0x7e)}),colorize(),customFormat),'transports':[new transports[(_0x44295f(0x7b))]({'filename':'log/app.log'})],'exceptionHandlers':[new transports[(_0x44295f(0x7b))]({'filename':_0x44295f(0x71)})],'rejectionHandlers':[new transports['File']({'filename':_0x44295f(0x71)})]});}[a6_0x224308(0x84)](_0x3cd4ac){const _0x32ecbe=a6_0x224308;this[_0x32ecbe(0x79)][_0x32ecbe(0x84)](_0x3cd4ac);}['warn'](_0x3a193f){const _0x70eb94=a6_0x224308;this['logger'][_0x70eb94(0x88)](_0x3a193f);}[a6_0x224308(0x76)](_0x5b3318){const _0x4df371=a6_0x224308;this[_0x4df371(0x79)]['error'](_0x5b3318);}[a6_0x224308(0x80)](_0x5b7670){const _0x200db1=a6_0x224308;this[_0x200db1(0x79)][_0x200db1(0x80)](_0x5b7670);}['setLevel'](_0x574ced){const _0x2a97c8=a6_0x224308;this[_0x2a97c8(0x79)][_0x2a97c8(0x8a)]=_0x574ced;}[a6_0x224308(0x73)](){a6_0x26df75['truncate']('log/app.log',0x0,_0x1d1921=>{const _0x4e802e=a6_0x1a1c;_0x1d1921?this[_0x4e802e(0x79)][_0x4e802e(0x76)](_0x4e802e(0x7c)+_0x1d1921[_0x4e802e(0x7d)]):this[_0x4e802e(0x79)][_0x4e802e(0x84)](_0x4e802e(0x77));});}}function a6_0x152f(){const _0x257aa7=['278858CYzLDs','3929220QvWKBH','error','Log\x20file\x20cleared','104305UpvZvp','logger','2261952sKGLUk','File','Failed\x20to\x20clear\x20the\x20log\x20file:\x20','message','YYYY-MM-DD\x20HH:mm:ss','11PEXVMR','debug','517540PLCRmP','630ypgzyj','36aiSvhb','info','9Ydjadv','15894zluVUd','5MCqaEi','warn',']:\x20','level','log/app.log','6329536GTJshq','clear'];a6_0x152f=function(){return _0x257aa7;};return a6_0x152f();}export default new Logger();