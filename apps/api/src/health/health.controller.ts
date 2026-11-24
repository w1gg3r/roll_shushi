import { Controller, Get } from "@nestjs/common";
@Controller("health")
export class HealthController {
 @Get() check(){return {status:"ok",service:"vot-eto-roll-api",timestamp:new Date().toISOString()};}
}