// -*- coding: utf-8, tab-width: 2 -*-

const hasOwn = Object.prototype.hasOwnProperty;

const priorityOptions = [
  'defaults',
];


function compileFsOptFromDict(orig) {
  if (!orig) { return 'defaults'; }
  if (Array.isArray(orig)) { return orig.filter(Boolean).join(','); }
  const dict = { ...orig };
  const optList = [];

  function addOpt(k, v) {
    if (v === null) { return optList.push(k); }
    if (v === true) { return optList.push(k); }
    if (v === false) { return optList.push('no' + k); }
    if (Array.isArray(v)) { return v.forEach(p => addOpt(k, p)); }
    optList.push(k + '=' + v);
  }

  function popAddOpt(k) {
    if (!hasOwn.call(dict, k)) { return; }
    const v = dict[k];
    delete dict[k];
    addOpt(k, v);
  }

  priorityOptions.forEach(popAddOpt);
  Object.keys(orig).sort().forEach(popAddOpt);
  return optList.join(',');
}


export default compileFsOptFromDict;
