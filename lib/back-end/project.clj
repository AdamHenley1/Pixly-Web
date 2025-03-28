(defproject back-end "0.1.0-SNAPSHOT"
  :description "Just a back-end for Pixly-Web (https://github.com/AdamHenley1/Pixly-Web)"
  :url "https://github.com/AdamHenley1/Pixly-Web/tree/main/lib/back-end"
  :dependencies [[org.clojure/clojure "1.11.1"]]
  :main ^:skip-aot back-end.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all
                       :jvm-opts ["-Dclojure.compiler.direct-linking=true"]}})
