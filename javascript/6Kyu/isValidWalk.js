function isValidWalk(walk) {

    return walk.length===10&&
    ((walk.toString().match(/n/g)?walk.toString().match(/n/g).length:0)===(walk.toString().match(/s/g)?walk.toString().match(/s/g).length:0))&&
    ((walk.toString().match(/w/g)?walk.toString().match(/w/g).length:0)===(walk.toString().match(/e/g)?walk.toString().match(/e/g).length:0));

}
