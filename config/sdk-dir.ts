import { conNex } from 'lib'
import { GLOBAL } from 'config/global'
import { FRANCHISE_LEADER, SEGMENT } from 'constant'

/**
 * Represents the SDK directory paths.
 */
export const SDK_DIR = {
  /**
   * The root directory path.
   */
  ROOT: conNex(GLOBAL.SDK_URL, SEGMENT.SDK),

  /**
   * The team all directory path.
   * {base_sdk_url}/team
   */
  TEAM_ALL: conNex(GLOBAL.SDK_URL, SEGMENT.TEAM),

  /**
   * The team state directory path.
   *
   * {base_sdk_url}/team/state/{state}
   *
   * @param state - The team state.
   * @returns The team state directory path.
   */
  TEAM_STATE: (state: any) => conNex(GLOBAL.SDK_URL, SEGMENT.TEAM, SEGMENT.STATE, state),

  /**
   * Returns the team info directory path for the specified team ID.
   *
   * {base_sdk_url}/team/info/{id}
   *
   * @param id - The team ID.
   * @returns The team info directory path.
   */
  TEAM_INFO: (id: any) => conNex(GLOBAL.SDK_URL, SEGMENT.TEAM, id, SEGMENT.INFO),

  /**
   * Returns the team find directory path for the specified team ID.
   *
   * {base_sdk_url}/team/find/{id}
   *
   * @param id - The team ID.
   * @returns The team find directory path.
   */
  TEAM_FIND: (id: any) => conNex(GLOBAL.SDK_URL, SEGMENT.TEAM, SEGMENT.FIND, id),

  /**
   * Returns the team find directory path for the specified team abbreviation.
   *
   * {base_sdk_url}/team/{abbv}/abbv
   *
   * @param abbv - The team abbreviation.
   * @returns The team find directory path.
   */
  TEAM_ABBV: (abbv: any) => conNex(GLOBAL.SDK_URL, SEGMENT.TEAM, abbv, SEGMENT.ABBV),

  /**
   * Returns the team roster directory path for the specified team ID.
   *
   * {base_sdk_url}/team/{id}/roster
   *
   * @param id - The team ID.
   * @returns The team roster directory path.
   */
  TEAM_ROSTER: (id: any) => conNex(GLOBAL.SDK_URL, SEGMENT.TEAM, id, SEGMENT.ROSTER),

  /**
   * Returns the team season stats directory path for the specified team ID.
   *
   * {base_sdk_url}/team/season/{abbv}
   *
   * @param abbv - The team abbvrebiation.
   * @returns The team season stats directory path.
   */
  TEAM_SEASON_STATS: (abbv: any) => conNex(GLOBAL.SDK_URL, SEGMENT.TEAM, SEGMENT.SEASON, abbv),

  /**
   * The player all directory path.
   *
   * {base_sdk_url}/player
   */
  PLAYER_ALL: conNex(GLOBAL.SDK_URL, SEGMENT.PLAYER),

  /**
   * Returns the player info directory path for the specified player ID.
   *
   * {base_sdk_url}/sdk/player/info/{id}
   *
   * @param id - The player ID.
   * @returns The player info directory path.
   */
  PLAYER_INFO: (id: any) => conNex(GLOBAL.SDK_URL, SEGMENT.PLAYER, id, SEGMENT.INFO),

  /**
   * Returns the player common info directory path for the specified player ID.
   *
   * {base_sdk_url}/common/player/:id
   *
   * @param id - The player ID.
   * @returns The player common info directory path.
   */
  PLAYER_COMMON_INFO: (id: any) => conNex(GLOBAL.SDK_URL, SEGMENT.COMMON, SEGMENT.PLAYER, id),

  /**
   * Returns the player award directory path for the specified player ID.
   *
   * {base_sdk_url}/player/{id}/award
   *
   * @param id - The player ID.
   * @returns The player find directory path.
   */
  PLAYER_AWARD: (id: any) => conNex(GLOBAL.SDK_URL, SEGMENT.PLAYER, id, SEGMENT.AWARD),

  /**
   * Returns the player career directory path for the specified player ID.
   *
   * {base_sdk_url}/player/career/{id}
   *
   * @param id - The player ID.
   * @returns The player career directory path.
   */
  PLAYER_CAREER: (id: any) => conNex(GLOBAL.SDK_URL, SEGMENT.PLAYER, id, SEGMENT.CAREER),

  /**
   * Returns the player fantasy directory path for the specified player ID.
   *
   * {base_sdk_url}/player/{id}/fantasy
   *
   * @param id - The player ID.
   * @returns The player fantasy directory path.
   */
  PLAYER_FANTASY: (id: any) => conNex(GLOBAL.SDK_URL, SEGMENT.PLAYER, id, SEGMENT.FANTASY),

  /**
   * Returns the player vs player directory path for the specified player IDs.
   *
   * {base_sdk_url}/player/{player1Id}/vs/{player2Id}
   *
   * @param player1Id - The first player ID.
   * @param player2Id - The second player ID.
   * @returns The player vs player directory path.
   */
  PLAYER_VS_PLAYER: (player1Id: any, player2Id: any) => conNex(GLOBAL.SDK_URL, SEGMENT.PLAYER, player1Id, SEGMENT.VS, player2Id),
  /**
   * The league leaders directory path.
   *
   * {base_sdk_url}/leader
   */
  LEADER_ALL: conNex(GLOBAL.SDK_URL, SEGMENT.LEADER),

  /**
   * The leader directory path for points.
   *
   * {base_sdk_url}/leader/pt
   */
  LEADER_PT: conNex(GLOBAL.SDK_URL, SEGMENT.LEADER, SEGMENT.PT),

  /**
   * The leader directory path for assists.
   *
   * {base_sdk_url}/leader/ast
   */
  LEADER_AST: conNex(GLOBAL.SDK_URL, SEGMENT.LEADER, SEGMENT.AST),

  /**
   * The draft directory path.
   *
   * {base_sdk_url}/draft
   */
  DRAFT: conNex(GLOBAL.SDK_URL, SEGMENT.DRAFT),

  /**
   * The draft history directory path.
   *
   * {base_sdk_url}/draft/history
   */
  DRAFT_HISTORY: conNex(GLOBAL.SDK_URL, SEGMENT.DRAFT, SEGMENT.HISTORY),

  /**
   * The all time leader directory path.
   *
   * {base_sdk_url}/all-time/leader
   */
  ALL_TIME_LEADER: conNex(GLOBAL.SDK_URL, SEGMENT.ALL_TIME, SEGMENT.LEADER),

  /**
   * Returns the all time leader directory path for the specified PTS.
   *
   * {base_sdk_url}/all-time/total
   */
  ALL_TIME_TOTAL: conNex(GLOBAL.SDK_URL, SEGMENT.ALL_TIME, SEGMENT.TOTAL),

  /**
   * Returns the all time leader directory path for the specified PT.
   *
   * {base_sdk_url}/leader/pt
   */
  ALL_TIME_PT: conNex(GLOBAL.SDK_URL, SEGMENT.LEADER, SEGMENT.PT),

  /**
   * Returns the all time leader directory path for the specified AST.
   *
   * {base_sdk_url}/all-time/total/assist
   */
  ALL_TIME_ASSIST: conNex(GLOBAL.SDK_URL, SEGMENT.ALL_TIME, SEGMENT.ASSIST),

  /**
   * Returns the franchise leader by team directory path.
   *
   * {base_sdk_url}/franchise/leader
   */
  FRANCHISE_LEADER: conNex(GLOBAL.SDK_URL, SEGMENT.FRANCHISE, SEGMENT.LEADER),

  /**
   * Returns the franchise leader by team directory path.
   *
   * {base_sdk_url}/franchise/player
   */
  FRANCHISE_PLAYER: conNex(GLOBAL.SDK_URL, SEGMENT.FRANCHISE, SEGMENT.PLAYER),

  /**
   * Returns the franchise history directory path for the specified league ID.
   *
   * {base_sdk_url}/franchise/history
   */
  FRANCHISE_HISTORY: conNex(GLOBAL.SDK_URL, SEGMENT.FRANCHISE, SEGMENT.HISTORY),

  /**
   * Returns the rotation leader by game_id.
   *
   * {base_sdk_url}/rotation
   */
  ROTATION: conNex(GLOBAL.SDK_URL, SEGMENT.ROTATION),

  /**
   * Returns the player all directory path.
   *
   * {base_sdk_url}/common/all/player
   */
  COMMON_ALL_PLAYER: conNex(GLOBAL.SDK_URL, SEGMENT.COMMON, SEGMENT.ALL, SEGMENT.PLAYER),

  /**
   * Returns the player all directory path.
   *
   * {base_sdk_url}/game
   */
  GAME_FINDER: conNex(GLOBAL.SDK_URL, SEGMENT.GAME),

  /**
   * Returns the synergy directory path for the specified PT.
   *
   * {base_sdk_url}/synergy/pt
   */
  SYNERGY_PT: conNex(GLOBAL.SDK_URL, SEGMENT.SYNERGY, SEGMENT.PT),

  /**
   * Returns the compare directory path.
   *
   * {base_sdk_url}/compare
   */
  COMPARE: conNex(GLOBAL.SDK_URL, SEGMENT.COMPARE),

  /**
   * Returns the league matchups directory path.
   *
   * {base_sdk_url}/league/matchups
   */
  LEAGUE_MATCHUPS: conNex(GLOBAL.SDK_URL, SEGMENT.LEAGUE, SEGMENT.MATCHUPS),

  /**
   * Returns the scoreboard directory path for latest games.
   *
   * {base_sdk_url}/scoreboard
   */
  SCOREBOARD: conNex(GLOBAL.SDK_URL, SEGMENT.SCOREBOARD)
}
