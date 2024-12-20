/** @nocollapse */ var Module = 
function(moduleArg = {}) {
  var moduleRtn;

var f=moduleArg,g,m=new Promise(a=>{g=a});"_begin_chunk _check_similar _begin_index_lock _malloc _memory ___indirect_function_table onRuntimeInitialized".split(" ").forEach(a=>{Object.getOwnPropertyDescriptor(m,a)||Object.defineProperty(m,a,{get:()=>q("You are getting "+a+" on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js"),set:()=>q("You are setting "+a+" on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")})});
var r=a=>console.log(a),t=a=>console.error(a);r=()=>{};t=a=>{console.error(a);throw Error("wasm error: "+a);};function v(a,b){if(!a)throw b;}function q(a){throw Error(a);}var B,C,D,E;function H(){var a=E.buffer;new Int8Array(a);B=new Int16Array(a);C=new Uint8Array(a);new Uint16Array(a);new Int32Array(a);D=new Uint32Array(a);new Float32Array(a);new Float64Array(a);new BigInt64Array(a);new BigUint64Array(a)}v(Math.imul,"This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
v(Math.fround,"This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");v(Math.clz32,"This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");v(Math.trunc,"This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");var I=new Int16Array(1),J=new Int8Array(I.buffer);I[0]=25459;
if(115!==J[0]||99!==J[1])throw"Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)";if(f.ENVIRONMENT)throw Error("Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)");
function K(a){return"FS_createPath"===a||"FS_createDataFile"===a||"FS_createPreloadedFile"===a||"FS_unlink"===a||"addRunDependency"===a||"FS_createLazyFile"===a||"FS_createDevice"===a||"removeRunDependency"===a}function L(a,b){"undefined"==typeof globalThis||Object.getOwnPropertyDescriptor(globalThis,a)||Object.defineProperty(globalThis,a,{configurable:!0,get(){b()}})}function M(a,b){L(a,()=>{N(`\`${a}\` is not longer defined by emscripten. ${b}`)})}M("buffer","Please use HEAP8.buffer or wasmMemory.buffer");
M("asm","Please use wasmExports instead");function O(a){Object.getOwnPropertyDescriptor(f,a)||Object.defineProperty(f,a,{configurable:!0,get(){var b=`'${a}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;K(a)&&(b+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you");q(b)}})}
var N=a=>{N.g||(N.g={});N.g[a]||(N.g[a]=1,t(a))},P="undefined"!=typeof TextDecoder?new TextDecoder:void 0,R=[null,[],[]],S={_abort_js:()=>q("native code called abort()"),emscripten_resize_heap:a=>{var b=C.length;a>>>=0;v(a>b);if(268435456<a)return t(`Cannot enlarge memory, requested ${a} bytes, but the limit is ${268435456} bytes!`),!1;for(var c=1;4>=c;c*=2){var h=b*(1+1/c);h=Math.min(h,a+100663296);var k=Math,n=k.min;h=Math.max(a,h);v(65536,"alignment argument is required");k=n.call(k,268435456,
65536*Math.ceil(h/65536));a:{n=k;h=E.buffer;var F=(n-h.byteLength+65535)/65536|0;try{E.grow(F);H();var w=1;break a}catch(x){t(`growMemory: Attempted to grow heap from ${h.byteLength} bytes to ${n} bytes, but got error: ${x}`)}w=void 0}if(w)return!0}t(`Failed to grow the heap from ${b} bytes to ${k} bytes, not enough memory!`);return!1},fd_close:()=>{q("fd_close called without SYSCALLS_REQUIRE_FILESYSTEM")},fd_seek:function(){return 70},fd_write:(a,b,c,h)=>{for(var k=0,n=0;n<c;n++){var F=D[b>>2],w=
D[b+4>>2];b+=8;for(var x=0;x<w;x++){var y=a,e=C[F+x],z=R[y];v(z);if(0===e||10===e){y=1===y?r:t;e=z;for(var l=0,p=l+NaN,u=l;e[u]&&!(u>=p);)++u;if(16<u-l&&e.buffer&&P)e=P.decode(e.subarray(l,u));else{for(p="";l<u;){var d=e[l++];if(d&128){var G=e[l++]&63;if(192==(d&224))p+=String.fromCharCode((d&31)<<6|G);else{var Q=e[l++]&63;if(224==(d&240))d=(d&15)<<12|G<<6|Q;else{if(240!=(d&248)){var V=N;var A=d;v("number"===typeof A);A="0x"+(A>>>0).toString(16).padStart(8,"0");V("Invalid UTF-8 leading byte "+A+" encountered when deserializing a UTF-8 string in wasm memory to a JS string!")}d=
(d&7)<<18|G<<12|Q<<6|e[l++]&63}65536>d?p+=String.fromCharCode(d):(d-=65536,p+=String.fromCharCode(55296|d>>10,56320|d&1023))}}else p+=String.fromCharCode(d)}e=p}y(e);z.length=0}else z.push(e)}k+=w}D[h>>2]=k;return 0}};
f.stringToUTF16=(a,b,c)=>{v(0==b%2,"Pointer passed to stringToUTF16 must be aligned to two bytes!");v("number"==typeof c,"stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");c??=2147483647;if(2>c)return 0;c-=2;var h=b;c=c<2*a.length?c/2:a.length;for(var k=0;k<c;++k)B[b>>1]=a.charCodeAt(k),b+=2;B[b>>1]=0;return b-h};
"writeI53ToI64 writeI53ToI64Clamped writeI53ToI64Signaling writeI53ToU64Clamped writeI53ToU64Signaling readI53FromI64 readI53FromU64 convertI32PairToI53 convertI32PairToI53Checked convertU32PairToI53 stackSave stackRestore stackAlloc getTempRet0 setTempRet0 zeroMemory strError inetPton4 inetNtop4 inetPton6 inetNtop6 readSockaddr writeSockaddr emscriptenLog readEmAsmArgs jstoi_q getExecutableName listenOnce autoResumeAudioContext getDynCaller dynCall callUserCallback asmjsMangle asyncLoad mmapAlloc HandleAllocator getNativeTypeSize STACK_SIZE STACK_ALIGN POINTER_SIZE ASSERTIONS getCFunc ccall cwrap uleb128Encode sigToWasmTypes generateFuncType convertJsFunctionToWasm getEmptyTableSlot updateTableMap getFunctionAddress addFunction removeFunction reallyNegative unSign strLen reSign formatString setValue getValue stringToUTF8Array stringToUTF8 lengthBytesUTF8 intArrayFromString intArrayToString AsciiToString stringToAscii UTF16ToString lengthBytesUTF16 UTF32ToString stringToUTF32 lengthBytesUTF32 stringToNewUTF8 stringToUTF8OnStack writeArrayToMemory registerKeyEventCallback maybeCStringToJsString findEventTarget getBoundingClientRect fillMouseEventData registerMouseEventCallback registerWheelEventCallback registerUiEventCallback registerFocusEventCallback fillDeviceOrientationEventData registerDeviceOrientationEventCallback fillDeviceMotionEventData registerDeviceMotionEventCallback screenOrientation fillOrientationChangeEventData registerOrientationChangeEventCallback fillFullscreenChangeEventData registerFullscreenChangeEventCallback JSEvents_requestFullscreen JSEvents_resizeCanvasForFullscreen registerRestoreOldStyle hideEverythingExceptGivenElement restoreHiddenElements setLetterbox softFullscreenResizeWebGLRenderTarget doRequestFullscreen fillPointerlockChangeEventData registerPointerlockChangeEventCallback registerPointerlockErrorEventCallback requestPointerLock fillVisibilityChangeEventData registerVisibilityChangeEventCallback registerTouchEventCallback fillGamepadEventData registerGamepadEventCallback registerBeforeUnloadEventCallback fillBatteryEventData battery registerBatteryEventCallback setCanvasElementSize getCanvasElementSize jsStackTrace getCallstack convertPCtoSourceLocation getEnvStrings checkWasiClock wasiRightsToMuslOFlags wasiOFlagsToMuslOFlags initRandomFill randomFill safeSetTimeout setImmediateWrapped safeRequestAnimationFrame clearImmediateWrapped polyfillSetImmediate registerPostMainLoop registerPreMainLoop getPromise makePromise idsToPromises makePromiseCallback isLeapYear ydayFromDate arraySum addDays getSocketFromFD getSocketAddress ALLOC_NORMAL ALLOC_STACK allocate writeStringToMemory writeAsciiToMemory setErrNo demangle stackTrace".split(" ").forEach(function(a){L(a,()=>
{var b=`\`${a}\` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line`,c=a;c.startsWith("_")||(c="$"+a);b+=` (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='${c}')`;K(a)&&(b+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you");N(b)});O(a)});"run addOnPreRun addOnInit addOnPreMain addOnExit addOnPostRun addRunDependency removeRunDependency out err callMain abort wasmMemory wasmExports HEAPF32 HEAPF64 HEAP_DATA_VIEW HEAP8 HEAPU8 HEAP16 HEAPU16 HEAP32 HEAPU32 HEAP64 HEAPU64 writeStackCookie checkStackCookie INT53_MAX INT53_MIN bigintToI53Checked ptrToString getHeapMax growMemory ENV ERRNO_CODES DNS Protocols Sockets timers warnOnce readEmAsmArgsArray jstoi_s alignMemory wasmTable noExitRuntime freeTableIndexes functionsInTableMap PATH PATH_FS UTF8Decoder UTF8ArrayToString UTF8ToString UTF16Decoder JSEvents specialHTMLTargets findCanvasEventTarget currentFullscreenStrategy restoreOldWindowedStyle UNWIND_CACHE promiseMap MONTH_DAYS_REGULAR MONTH_DAYS_LEAP MONTH_DAYS_REGULAR_CUMULATIVE MONTH_DAYS_LEAP_CUMULATIVE SYSCALLS allocateUTF8 allocateUTF8OnStack print printErr".split(" ").forEach(O);
var T,U,W={env:S,wasi_snapshot_preview1:S};if(!f.wasm)throw"Must load WebAssembly Module in to variable Module.wasm before adding compiled output .js script to the DOM";
WebAssembly.instantiate(f.wasm,W).then(a=>{a=a.instance.exports;f._begin_chunk=a.begin_chunk;f._begin_index_lock=a.begin_index_lock;f._check_similar=a.check_similar;f._malloc=a.malloc;T=a.emscripten_stack_init;U=a.emscripten_stack_get_end;E=a.memory;v(E);H();T();var b=U();v(0==(b&3));0==b&&(b+=4);D[b>>2]=34821223;D[b+4>>2]=2310721022;a.__wasm_call_ctors();g(f);r("ready() called, and INVOKE_RUN=0. The runtime is now ready for you to call run() to invoke application _main(). You can also override ready() in a --pre-js file to get this signal as a callback")},
a=>{console.error(a)});moduleRtn=m;for(const a of Object.keys(f))a in moduleArg||Object.defineProperty(moduleArg,a,{configurable:!0,get(){q(`Access to module property ('${a}') is no longer possible via the module constructor argument; Instead, use the result of the module constructor.`)}});


  return moduleRtn;
}
export default Module;
