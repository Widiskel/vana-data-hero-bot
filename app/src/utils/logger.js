const a5_0x3f8f35=a5_0x567a;(function(_0x3e4b82,_0x4965bc){const _0x4ad431=a5_0x567a,_0x596318=_0x3e4b82();while(!![]){try{const _0x167e13=-parseInt(_0x4ad431(0xb5))/0x1*(parseInt(_0x4ad431(0xa3))/0x2)+parseInt(_0x4ad431(0xa1))/0x3+parseInt(_0x4ad431(0xa5))/0x4+-parseInt(_0x4ad431(0xa7))/0x5*(parseInt(_0x4ad431(0xb4))/0x6)+-parseInt(_0x4ad431(0xa4))/0x7+-parseInt(_0x4ad431(0xa6))/0x8*(-parseInt(_0x4ad431(0xa0))/0x9)+parseInt(_0x4ad431(0xb0))/0xa;if(_0x167e13===_0x4965bc)break;else _0x596318['push'](_0x596318['shift']());}catch(_0x4418ea){_0x596318['push'](_0x596318['shift']());}}}(a5_0x1205,0xb6f4b));import{createLogger,format,transports}from'winston';import a5_0x28ae0f from'fs';const {combine,timestamp,printf,colorize}=format,customFormat=printf(({level:_0x3f82ef,message:_0x42cdf0,timestamp:_0x6d73e9})=>{const _0x4c8039=a5_0x567a;return _0x6d73e9+'\x20['+_0x3f82ef+_0x4c8039(0xb6)+_0x42cdf0;});function a5_0x567a(_0x58c3d5,_0xa6cfd6){const _0x12054b=a5_0x1205();return a5_0x567a=function(_0x567a6c,_0x56c61e){_0x567a6c=_0x567a6c-0x9f;let _0x1e122f=_0x12054b[_0x567a6c];return _0x1e122f;},a5_0x567a(_0x58c3d5,_0xa6cfd6);}class Logger{constructor(){const _0x51bbe3=a5_0x567a;this[_0x51bbe3(0xab)]=createLogger({'level':_0x51bbe3(0xa8),'format':combine(timestamp({'format':_0x51bbe3(0xac)}),colorize(),customFormat),'transports':[new transports[(_0x51bbe3(0xaf))]({'filename':_0x51bbe3(0xad)})],'exceptionHandlers':[new transports[(_0x51bbe3(0xaf))]({'filename':_0x51bbe3(0xad)})],'rejectionHandlers':[new transports[(_0x51bbe3(0xaf))]({'filename':_0x51bbe3(0xad)})]});}[a5_0x3f8f35(0xb3)](_0x1cd74b){const _0x372565=a5_0x3f8f35;this['logger'][_0x372565(0xb3)](_0x1cd74b);}[a5_0x3f8f35(0xae)](_0x845d81){const _0x1673f5=a5_0x3f8f35;this[_0x1673f5(0xab)][_0x1673f5(0xae)](_0x845d81);}[a5_0x3f8f35(0xa9)](_0x1adc4e){const _0x59ba7b=a5_0x3f8f35;this[_0x59ba7b(0xab)][_0x59ba7b(0xa9)](_0x1adc4e);}[a5_0x3f8f35(0xa8)](_0x329a3e){const _0x5b05bc=a5_0x3f8f35;this[_0x5b05bc(0xab)][_0x5b05bc(0xa8)](_0x329a3e);}[a5_0x3f8f35(0xaa)](_0x215e09){const _0x3937c4=a5_0x3f8f35;this[_0x3937c4(0xab)][_0x3937c4(0xa2)]=_0x215e09;}[a5_0x3f8f35(0xb1)](){const _0x1362c7=a5_0x3f8f35;a5_0x28ae0f[_0x1362c7(0x9f)]('log/app.log',0x0,_0x4f4efd=>{const _0x2bd5b3=_0x1362c7;_0x4f4efd?this[_0x2bd5b3(0xab)]['error'](_0x2bd5b3(0xb7)+_0x4f4efd['message']):this[_0x2bd5b3(0xab)]['info'](_0x2bd5b3(0xb2));});}}function a5_0x1205(){const _0x4e9992=['331479qvlsuV','3113523nWouRl','level','26164SprCLZ','7683865LUdPzD','626856CpnpnH','240VbLxaI','5pNYoZL','debug','error','setLevel','logger','YYYY-MM-DD\x20HH:mm:ss','log/app.log','warn','File','20156820IqrSAQ','clear','Log\x20file\x20cleared','info','8843118CjdCvG','76RCcdPf',']:\x20','Failed\x20to\x20clear\x20the\x20log\x20file:\x20','truncate'];a5_0x1205=function(){return _0x4e9992;};return a5_0x1205();}export default new Logger();