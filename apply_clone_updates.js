const fs = require('fs');

console.log('--- Applying clone enhancements ---');

// 1. Update app.js
let appJs = fs.readFileSync('c:/Users/User/Desktop/lusion/app.js', 'utf8');

// A. Preloader timeout fallback
const preloaderTarget = 'show(e,t){this._initCallback=e,this._startCallback=t,this.isActive=!0,properties.loader.start(r=>{this.percentTarget=r})}';
const preloaderReplacement = 'show(e,t){this._initCallback=e,this._startCallback=t,this.isActive=!0,properties.loader.start(r=>{this.percentTarget=r}),setTimeout(()=>{if(this.percentTarget<1)this.percentTarget=1;},2500)}';

if (appJs.includes(preloaderTarget)) {
  appJs = appJs.replace(preloaderTarget, preloaderReplacement);
  console.log('✓ Added Preloader safety fallback timer');
} else {
  console.warn('Preloader target not found in app.js');
}

// B. HomeBalloons geometry fallback & dynamic update
// Find preInit in HomeBalloons:
const preInitTarget = 'properties.loader.add(settings.MODEL_PATH+"home/"+(browser$1.isMobile?"cross_ld":"cross")+".buf",{onLoad:e=>{this.geometry=e}})';
const preInitReplacement = 'properties.loader.add(settings.MODEL_PATH+"home/"+(browser$1.isMobile?"cross_ld":"cross")+".buf",{onLoad:e=>{this.geometry=e;if(this.balloonList){for(let i=0;i<this.balloonList.length;i++){let b=this.balloonList[i];if(b&&b.mesh){b.mesh.geometry=e;if(b.mesh._prePassMesh)b.mesh._prePassMesh.geometry=e;}}}}})';

if (appJs.includes(preInitTarget)) {
  appJs = appJs.replace(preInitTarget, preInitReplacement);
  console.log('✓ Enhanced HomeBalloons.preInit with dynamic mesh geometry swap');
} else {
  console.warn('HomeBalloons preInit target not found');
}

// HomeBalloons fallback geometry before balloon loop in init()
const initTarget = 'this.NEIGHBOUR_COUNT=this.NUM_BALLOONS-1;let t=new ShaderMaterial({uniforms:{},vertexShader:prePassVert,fragmentShader:prePassFrag,colorWrite:!1}),r=new ShaderMaterial({uniforms:{},vertexShader:prePassVert,fragmentShader:prePassFrag,side:BackSide,colorWrite:!1});for(let n=0;n<this.NUM_BALLOONS;n++){let a=SPHERES_DATA[n],{sssColor:l,name:c,color:u,isColored:f,sss:p,isSemitransparent:g,isRough:v,radius:_,density:T,friction:M,restitution:S,isBlackWhite:b}=a,C=this.geometry';
const initReplacement = 'this.NEIGHBOUR_COUNT=this.NUM_BALLOONS-1;if(!this.geometry){const g1=new BoxGeometry(1.6,.45,.45),g2=new BoxGeometry(.45,1.6,.45),g3=new BoxGeometry(.45,.45,1.6),gs=[g1,g2,g3];let tv=0,ti=0;gs.forEach(g=>{tv+=g.attributes.position.count,ti+=g.index.count});let pa=new Float32Array(tv*3),na=new Float32Array(tv*3),ua=new Float32Array(tv*2),ia=new Uint16Array(ti),vo=0,io=0,vc=0;gs.forEach(g=>{let p=g.attributes.position.array,n=g.attributes.normal.array,u=g.attributes.uv.array,idx=g.index.array;pa.set(p,vo*3),na.set(n,vo*3),ua.set(u,vo*2);for(let i=0;i<idx.length;i++)ia[io+i]=idx[i]+vc;vo+=g.attributes.position.count,io+=idx.length,vc+=g.attributes.position.count});let bg=new BufferGeometry;bg.setAttribute("position",new BufferAttribute(pa,3)),bg.setAttribute("normal",new BufferAttribute(na,3)),bg.setAttribute("uv",new BufferAttribute(ua,2)),bg.setIndex(new BufferAttribute(ia,1)),this.geometry=bg}let t=new ShaderMaterial({uniforms:{},vertexShader:prePassVert,fragmentShader:prePassFrag,colorWrite:!1}),r=new ShaderMaterial({uniforms:{},vertexShader:prePassVert,fragmentShader:prePassFrag,side:BackSide,colorWrite:!1});for(let n=0;n<this.NUM_BALLOONS;n++){let a=SPHERES_DATA[n],{sssColor:l,name:c,color:u,isColored:f,sss:p,isSemitransparent:g,isRough:v,radius:_,density:T,friction:M,restitution:S,isBlackWhite:b}=a,C=this.geometry';

if (appJs.includes(initTarget)) {
  appJs = appJs.replace(initTarget, initReplacement);
  console.log('✓ Added HomeBalloons procedural 3D cross geometry fallback');
} else {
  console.warn('HomeBalloons init target not found');
}

fs.writeFileSync('c:/Users/User/Desktop/lusion/app.js', appJs, 'utf8');
console.log('Saved app.js, bytes:', appJs.length);

// 2. Clean initial numbers in index.html preloader digits
let indexHtml = fs.readFileSync('c:/Users/User/Desktop/lusion/index.html', 'utf8');
const oldDigits = '<div class="preloader-percent-digit" style="transform: translateY(0%) translateY(-0.05em);"> <div class="preloader-percent-digit-num">0</div> <div class="preloader-percent-digit-num">0</div> </div> <div class="preloader-percent-digit" style="transform: translateY(-48.4386%) translateY(-0.05em);"> <div class="preloader-percent-digit-num">8</div> <div class="preloader-percent-digit-num">9</div> </div> <div class="preloader-percent-digit" style="transform: translateY(-20.2733%) translateY(-0.05em);"> <div class="preloader-percent-digit-num">6</div> <div class="preloader-percent-digit-num">7</div> </div>';
const newDigits = '<div class="preloader-percent-digit" style="transform: translateY(0%) translateY(-0.05em);"> <div class="preloader-percent-digit-num">0</div> <div class="preloader-percent-digit-num">0</div> </div> <div class="preloader-percent-digit" style="transform: translateY(0%) translateY(-0.05em);"> <div class="preloader-percent-digit-num">0</div> <div class="preloader-percent-digit-num">0</div> </div> <div class="preloader-percent-digit" style="transform: translateY(0%) translateY(-0.05em);"> <div class="preloader-percent-digit-num">0</div> <div class="preloader-percent-digit-num">0</div> </div>';

if (indexHtml.includes(oldDigits)) {
  indexHtml = indexHtml.replace(oldDigits, newDigits);
  fs.writeFileSync('c:/Users/User/Desktop/lusion/index.html', indexHtml, 'utf8');
  console.log('✓ Cleaned preloader initial digits in index.html');
} else {
  console.log('Digits already cleaned or formatted differently');
}

console.log('All updates applied successfully!');

