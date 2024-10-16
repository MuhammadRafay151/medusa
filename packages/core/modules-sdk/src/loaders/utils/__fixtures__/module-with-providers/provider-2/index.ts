import { ModuleProvider2Service } from "./services/provider-service"
import { ModuleProvider } from "@medusajs/utils"

export * from "./services/provider-service"

export default ModuleProvider("provider-2", {
  services: [ModuleProvider2Service],
})