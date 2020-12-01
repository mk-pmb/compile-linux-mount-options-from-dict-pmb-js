// -*- coding: utf-8, tab-width: 2 -*-

import assert from 'assert';

import fsOpt from '..';

const eq = assert.strictEqual;


eq(fsOpt(['noatime', 'defaults']), 'noatime,defaults');

eq(fsOpt({
  defaults: true,
  atime:  false,
  bogus:  undefined,
  gid:    'adm',
  uid:    [23, 42],
  dmask:  '0002',
  fmask:  '0113',
  fail:   false,
}), 'defaults,noatime,dmask=0002,nofail,fmask=0113,gid=adm,uid=23,uid=42');





console.info('+OK basics test passed.');
