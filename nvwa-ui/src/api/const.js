export default {
  // build status
  BUILD_STATUS_CREATED: 10,
  BUILD_STATUS_BUILDING: 20,
  BUILD_STATUS_BUILD_SUCC: 30,
  BUILD_STATUS_BUILD_FAILED: 40,
  BUILD_STATUS_PACK_SUCC: 50,
  BUILD_STATUS_PACK_FAILED: 60,
  BUILD_STATUS_PKG_PUSH_SUCC: 70,
  BUILD_STATUS_PKG_PUSH_FAILED: 80,

  // deployment status
  DEPLOYMENT_STATUS_CREATED: 10,
  DEPLOYMENT_STATUS_NO_AUDIT: 20,
  DEPLOYMENT_STATUS_WAIT_AUDIT: 30,
  DEPLOYMENT_STATUS_AUDIT_PASS: 40,
  DEPLOYMENT_STATUS_AUDIT_REJECT: 50,
  DEPLOYMENT_STATUS_CANCELED: 60,
  DEPLOYMENT_STATUS_DEALING: 70,
  DEPLOYMENT_STATUS_SUCC: 80,
  DEPLOYMENT_STATUS_FAILED: 90,

  // job status
  JOB_STATUS_CREATED: 10,
  JOB_STATUS_READY: 20,
  JOB_STATUS_DEALING: 30,
  JOB_STATUS_SUCC: 40,
  JOB_STATUS_FAILED: 50,

  // job step
  JOB_STEP_INIT_WORKSPACE: 10,
  JOB_STEP_SYNC_VERSION_PACKAGE: 20,
  JOB_STEP_UNPACK_VERSION_PACKAGE: 30,
  JOB_STEP_CMD_BEFORE_DEPLOY: 40,
  JOB_STEP_DO_DEPLOY: 50,
  JOB_STEP_CMD_AFTER_DEPLOY: 60,
  JOB_STEP_CMD_HEALTH_CHECK: 70,
  JOB_STEP_CMD_ONLINE: 80,
  JOB_STEP_END_CLEAN: 90,

  // job step status
  JOB_STEP_STATUS_DEALING: 10,
  JOB_STEP_STATUS_SUCC: 20,
  JOB_STEP_STATUS_FAILED: 30,

  // audit status
  AUDIT_STATUS_WAITING: 10,
  AUDIT_STATUS_PASS: 40,
  AUDIT_STATUS_REJECT: 50,
  AUDIT_STATUS_CANCELED: 60

}
