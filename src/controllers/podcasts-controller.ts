import {IncomingMessage, ServerResponse} from "http"

import {servceListEpisodes} from '../services/list-episodes-service'

export const getListEpisodes = async(req: IncomingMessage, res: ServerResponse) => {
    const content = await servceListEpisodes()

    res.writeHead(200, {'Content-Type': "application/json"})
    res.end(
        JSON.stringify(content)
)
}