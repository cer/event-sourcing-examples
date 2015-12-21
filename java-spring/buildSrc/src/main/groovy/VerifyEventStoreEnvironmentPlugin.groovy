import org.gradle.api.*


class VerifyEventStoreEnvironmentPlugin implements Plugin<Project> {
    void apply(Project project) {
       project.test {
            beforeSuite { x ->
                if (x.parent == null) {
                    if (System.getenv("EVENTUATE_API_KEY_ID") == null && System.getenv("EVENTUATE_API_KEY_SECRET") == null)
                        logger.warn("\nPLEASE make sure that Eventuate-related environment variables EVENTUATE_API_KEY_ID and EVENTUATE_API_KEY_SECRET are set, see sample-set-remote-env.sh !!!!\n")
                }
            }
        }
    }
}
