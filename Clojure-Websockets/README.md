# Birdwatch using Clojure, ClojureScript and Om
This is an all-Clojure implementation of the **BirdWatch** application.

## Installation
First of all, you need **[Leiningen](http://leiningen.org)** installed on your system. Then, you need to build the client-side application:

    lein cljsbuild once release
    lein cljsbuild once dev

Alternatively, you can use the following during development for detecting file system changes and MUCH FASTER recompilation:

    lein cljsbuild once release
    lein cljsbuild once dev

The you will need to create a file named twitterconf.edn. You can copy twitterconf-tpl.edn as a template. Edit it and fill out the credentials you have obtained from dev.twitter.com:

    { :consumer-key             "<YOUR API KEY HERE>"
      :consumer-secret          "<YOUR API SECRET HERE>"
      :user-access-token        "<YOUR ACCESS TOKEN HERE>"
      :user-access-token-secret "<YOUR ACCESS TOKEN SECRET HERE>"
      :es-address               "http://127.0.0.1:9200"
      :es-index                 "birdwatch"

In the twitterconf.edn you can also specify the address under which your installation of **[ElasticSearch](http://www.elasticsearch.org)** is accessible, the index to use in ElasticSearch and which terms to track from Twitter. 

## Usage
Once the steps described above are completed, usage is easy. You can start up the application like this:

    lein run

Alternatively, you can use the REPL:

    lein repl
    birdwatch.core=> (start-http-server!)

## License
Copyright © 2014 Matthias Nehlsen. Distributed under the Apache License, Version 2.0. See separate LICENSE file. 