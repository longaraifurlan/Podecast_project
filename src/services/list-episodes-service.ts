import { repositoryPodcast } from "../repositories/podcasts-repository"



export const servceListEpisodes = async () => {
    const data = await repositoryPodcast()

    return data
}
