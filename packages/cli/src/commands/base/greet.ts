import { logger } from "../../utils/logger";
import prompts from 'prompts'

export async function greet() {
    // 提问
    const nameRes = await prompts({
        type: 'text',
        name: 'name',
        message: 'What is your name?'
    })
    const  hobbyRes = await prompts({
        type: 'select',
        name: 'hobby',
        message: 'What is your hobby?',
        choices: [
            { title: 'Sports', value: 'sports' },
            { title: 'Music', value: 'music' },
            { title: 'Movie', value: 'movie' },
        ]
    });
    logger.log(nameRes, hobbyRes);
}
