import { Router } from 'express'
import { SDKController, SDKSetController } from 'controller'
import { PATH_SDK } from 'config'

const router = Router()

router.get(PATH_SDK.TEAM, SDKController.getAllTeam)
router.get(PATH_SDK.TEAM_STATE, SDKController.getAllTeamByState)
router.get(PATH_SDK.TEAM_ID, SDKController.getTeam)
router.get(PATH_SDK.TEAM_ABBV, SDKController.getTeamByAbbv)
router.get(PATH_SDK.TEAM_ROSTER, SDKController.getRosterByTeam)
router.get(PATH_SDK.TEAM_YEARLY_STATS, SDKController.getTeamYearlyStatsByAbbv)

router.get(PATH_SDK.PLAYER, SDKController.getAllPlayer)
router.post(PATH_SDK.PLAYER, SDKSetController.createAllPlayerBase)
router.post(PATH_SDK.PLAYER_COMMON_APICODE, SDKSetController.createPlayerBaseByApiCode)
router.post(PATH_SDK.TEAM, SDKSetController.createTeamRosterHistory)
router.put(PATH_SDK.TEAM, SDKSetController.updateRosterHistoryWithCoachData)
router.get(PATH_SDK.PLAYER_ID, SDKController.getPlayer)
router.get(PATH_SDK.PLAYER_AWARD, SDKController.getPlayerAward)
router.get(PATH_SDK.PLAYER_CAREER, SDKController.getPlayerCareer)
router.get(PATH_SDK.PLAYER_FANTASY, SDKController.getPlayerFantasyProfile)
router.get(PATH_SDK.PLAYER_VS_PLAYER, SDKController.getPlayerVsPlayer)

router.get(PATH_SDK.DRAFT_HISTORY, SDKController.getDraftHistory)

router.get(PATH_SDK.LEADER_ALL, SDKController.getAllLeader)
router.get(PATH_SDK.LEADER_PT, SDKController.getLeaderPtTeam)
router.get(PATH_SDK.LEADER_PT_PLAYER, SDKController.getLeaderPtPlayer)
router.get(PATH_SDK.LEADER_AST, SDKController.getLeaderAstTeam)
router.get(PATH_SDK.LEADER_AST_PLAYER, SDKController.getLeaderAstPlayer)

router.get(PATH_SDK.LEAGUE_MATCHUPS, SDKController.getLeagueMatchups)

router.get(PATH_SDK.ALL_TIME_LEADER, SDKController.getAllTimeLeader)
router.get(PATH_SDK.ALL_TIME_TOTAL, SDKController.getAllTimeTotal)

router.get(PATH_SDK.FRANCHISE_LEADER, SDKController.getAllFranchiseLeader)
router.get(PATH_SDK.FRANCHISE_PLAYER, SDKController.getAllFranchisePlayer)
router.get(PATH_SDK.FRANCHISE_HISTORY, SDKController.getAllFranchiseHistory)

router.get(PATH_SDK.ROTATION, SDKController.getRotationByGame)

router.get(PATH_SDK.COMMON_ALL_PLAYER, SDKController.getAllCommonPlayer)

router.get(PATH_SDK.GAME_FINDER, SDKController.getGameFinder)

router.get(PATH_SDK.SYNERGY_PT, SDKController.getSynergyPlaytype)

router.get(PATH_SDK.COMPARE, SDKController.getPlayerCompare)

router.get(PATH_SDK.SCOREBOARD, SDKController.getScoreboard)

/**
 * Route for SDK module
 *
 * @path {baseUrl}/sdk
 */
const sdkRoute = router
export default sdkRoute
