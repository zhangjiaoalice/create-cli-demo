import { Command } from "commander";
import { logger } from "../../utils/logger";
import prompts from 'prompts'

/**
 * prompts 的类型type
 * text
 * select
 * password
 * invisible
 * number
 * confirm
 * list
 * toggle
 * multiselect
 * autocompleteMultiselect
 * autocomplete
 * date
 */

export function greet(program: Command) {
    return program.createCommand("greet")
    .description("问候")
    .action(async () => {
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
        const genderRes = await prompts({
            type: 'toggle',
            name: 'gender',
            message: 'What is your gender?'
        })
        logger.log(nameRes, hobbyRes, genderRes);
    });
}
