// var schedule = require('node-schedule');
import schedule from 'node-schedule';
import { main } from '../../main.js'

let rule = new schedule.RecurrenceRule()
/**每天的凌晨12点更新代码*/
rule.hour = 9
rule.minute = 0
rule.second = 0
/**启动任务*/
schedule.scheduleJob(rule,  async () => {
    main()
    console.log('代码更新了！');
})
