import {
    check,
    request,
    RESULTS,
    requestMultiple,
    PERMISSIONS
  } from 'react-native-permissions';
  
  // This function can be used anywhere as it supports multiple permissions. 
  // It checks for permissions and then requests for it.
  export async function checkMultiplePermissions(permissions) {
    let isPermissionGranted = false;
    const statuses = await request(permissions);
    const statuse = await request(PERMISSIONS.IOS.CAMERA);
    console.log("statuses",statuses);
    // for (var index in permissions) {
    //   if (statuses[permissions[index]] === RESULTS.GRANTED) {
    //     isPermissionGranted = true;
    //   } else {
    //     isPermissionGranted = false;
    //     break;
    //   }
    // }
    // return isPermissionGranted;
  }
  
  // In case you want to check a single permission
  export async function checkPermission(permission) {
    var isPermissionGranted = false;
    const result = await check(permission);
    switch (result) {
      case RESULTS.GRANTED:
        isPermissionGranted = true;
        break;
      case RESULTS.DENIED:
        isPermissionGranted = false;
        break;
      case RESULTS.BLOCKED:
        isPermissionGranted = false;
        break;
      case RESULTS.UNAVAILABLE:
        isPermissionGranted = false;
        break;
    }
    return isPermissionGranted;
  }