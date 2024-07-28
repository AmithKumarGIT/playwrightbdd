import { info } from "console";
import {transports, format} from "winston";
import winston = require("winston/lib/winston/config");

export function optinons(scenarioName: string){
       return{
        transports: [
            new transports.File({
                filename: `test-reults/logs/${scenarioName}/log.log`,
                level: 'info',
                format: format.combine(
                       format.timestamp({ format: 'MMM-DD-YYYY HH:MM:SS'}),
                       format.align(),
                       format.printf(info => `${info.level}: ${[info.timestamp]} : ${info.message}`)
                )
            })
        ]
       }
};




