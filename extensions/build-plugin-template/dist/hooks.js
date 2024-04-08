"use strict";var __awaiter=this&&this.__awaiter||function(o,e,t,n){return new(t||(t=Promise))(function(s,r){function i(o){try{l(n.next(o))}catch(o){r(o)}}function a(o){try{l(n.throw(o))}catch(o){r(o)}}function l(o){var e;o.done?s(o.value):(e=o.value,e instanceof t?e:new t(function(o){o(e)})).then(i,a)}l((n=n.apply(o,e||[])).next())})};Object.defineProperty(exports,"__esModule",{value:!0}),exports.onAfterMake=exports.onBeforeMake=exports.onError=exports.unload=exports.onAfterBuild=exports.onAfterCompressSettings=exports.onBeforeCompressSettings=exports.onBeforeBuild=exports.load=exports.throwError=void 0;const global_1=require("./global");function log(...o){return console.log(`[${global_1.PACKAGE_NAME}] `,...o)}let allAssets=[];exports.throwError=!0;const load=function(){return __awaiter(this,void 0,void 0,function*(){console.log(`[${global_1.PACKAGE_NAME}] Load cocos plugin example in builder.`),allAssets=yield Editor.Message.request("asset-db","query-assets")})};exports.load=load;const onBeforeBuild=function(o,e){return __awaiter(this,void 0,void 0,function*(){log(`${global_1.PACKAGE_NAME}.webTestOption`,"onBeforeBuild")})};exports.onBeforeBuild=onBeforeBuild;const onBeforeCompressSettings=function(o,e){return __awaiter(this,void 0,void 0,function*(){o.packages[global_1.PACKAGE_NAME].webTestOption&&console.debug("webTestOption",!0),console.debug("get settings test",e.settings)})};exports.onBeforeCompressSettings=onBeforeCompressSettings;const onAfterCompressSettings=function(o,e){return __awaiter(this,void 0,void 0,function*(){console.log("webTestOption","onAfterCompressSettings")})};exports.onAfterCompressSettings=onAfterCompressSettings;const onAfterBuild=function(o,e){return __awaiter(this,void 0,void 0,function*(){const o={image:"57520716-48c8-4a19-8acf-41c9f8777fb0"};for(const t of Object.keys(o)){const n=o[t];console.debug(`containsAsset of ${t}`,e.containsAsset(n)),console.debug(`getAssetPathInfo of ${t}`,e.getAssetPathInfo(n)),console.debug(`getRawAssetPaths of ${t}`,e.getRawAssetPaths(n)),console.debug(`getJsonPathInfo of ${t}`,e.getJsonPathInfo(n))}})};exports.onAfterBuild=onAfterBuild;const unload=function(){return __awaiter(this,void 0,void 0,function*(){console.log(`[${global_1.PACKAGE_NAME}] Unload cocos plugin example in builder.`)})};exports.unload=unload;const onError=function(o,e){return __awaiter(this,void 0,void 0,function*(){console.warn(`${global_1.PACKAGE_NAME} run onError`)})};exports.onError=onError;const onBeforeMake=function(o,e){return __awaiter(this,void 0,void 0,function*(){console.log(`onBeforeMake: root: ${o}, options: ${e}`)})};exports.onBeforeMake=onBeforeMake;const onAfterMake=function(o,e){return __awaiter(this,void 0,void 0,function*(){console.log(`onAfterMake: root: ${o}, options: ${e}`)})};exports.onAfterMake=onAfterMake;