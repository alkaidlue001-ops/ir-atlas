(() => {
const c=window.ATLAS_CONTENT||{};
Object.assign(window.PROFILE,c.profile||{});
window.ATLAS.nodes.forEach(n=>{const e=c.nodeEdits?.[n.id];if(!e)return;['intro','claim','url','book'].forEach(k=>{if(typeof e[k]==='string'&&e[k])n[k]=e[k]})});
})();
