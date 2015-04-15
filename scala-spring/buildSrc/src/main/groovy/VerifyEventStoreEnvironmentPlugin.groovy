import org.gradle.api.*


class VerifyEventStoreEnvironmentPlugin implements Plugin<Project> {
    void apply(Project project) {
       project.test {
            beforeSuite { x ->
                if (x.parent == null) {
                    if (System.getenv("EVENT_STORE_URL") == null)
                        logger.warn("\nPLEASE make sure that Event Store-related environment variables including EVENT_STORE_URL are set, see sample-set-remote-env.sh !!!!\n")
                }
            }
        }
    }
}

