import org.gradle.api.*


class VerifyMongoDBConfigurationPlugin implements Plugin<Project> {
    void apply(Project project) {
       project.test {
            beforeSuite { x ->
                if (x.parent == null) {
                    if (System.getenv("SPRING_DATA_MONGODB_URI") == null)
                        throw new RuntimeException("Please make sure that the environment variable SPRING_DATA_MONGODB_URI is set, e.g. export SPRING_DATA_MONGODB_URI=mongodb://192.168.59.103/mydb")
                }
            }
        }
    }
}