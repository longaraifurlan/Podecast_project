import { StatusCode } from "../../utils/status-code"
import { PodcastTransferModel } from "../models/podcast-transfer-model"
import { repositoryPodcast } from "../repositories/podcasts-repository"



export const serviceListEpisodes = async (): Promise<PodcastTransferModel> => {

    //definição de contrato
    let responseFormat : PodcastTransferModel = {
        statusCode: 0,
        body: []
    }

    //busca de dados
    const data = await repositoryPodcast()

    //verificação do tipo de resposta
    responseFormat = {
        statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
        body: data
    }

    

    return responseFormat
}
