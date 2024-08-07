import { Router } from 'express'
import { SDKSetController, TeamController } from 'controller'
import { PATH_DIR } from 'config'
import { SEGMENT } from 'constant'

const router = Router()

router.get(SEGMENT.ROOT, TeamController.getAllTeam)
router.get(PATH_DIR.ID, TeamController.getTeamById)
router.post(SEGMENT.ROOT, SDKSetController.createTeamBase)
router.put(SEGMENT.ROOT, TeamController.updateAllTeam)

const teamRoute = router
export default teamRoute
