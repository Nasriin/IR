# comp479 final project

The project is structured as a combined Scala/Java project built with
 the simple build tool (sbt). It runs a simple web server using Spray IO
 that serves up a simple webpage providing the frontend search functionality.
 This makes requests to the server, which in turn sends queries to our indexed
 data in Apache Solr.

## General prerequisites

Before you attempt to run the project you need to have Apache Solr running
on your machine and listening on port 8983. You will either need to run something
like Nutch to crawl the desired websites, or you can copy our pre-crawled index
from the src/main/resources directory into your Solr installation.

## Running

This archive should come with a pre-build executable script, that is a
java jar file with a shebang line and shell script prepended. It should
already be executable, and you can run it from the command line like this:

    target/project3

  If you get a permission denied error, then make sure it is executable:

    chmod +x target/project3

  If it runs successfully, you should see the following output indicating that
  the server is up and running, and listening on port 12345.

    [INFO] [11/27/2014 00:54:43.055] [project3-frontend-system-akka.actor.default-dispatcher-4] [akka://project3-frontend-system/user/IO-HTTP/listener-0] Bound to localhost/127.0.0.1:12345

  You can then visit `http://localhost:12345/` to visit our server and make queries.


## Building

To build the project a couple more dependencies are necessary.

1. Java JDK (v6+)
2. SBT (included in this archive as sbt/bin/sbt)
3. Node.js
  1. the 'node' executable needs to be in your path. On Ubuntu, you'll need to link
     /usr/bin/nodejs to /usr/bin/node.
  2. the node package manger (npm) needs to be installed
  3. requirejs (installed via npm)
  4. stylus (installed via npm)

You can do one of two things. To run the program in development mode, you can
run the `~re-start` command from the sbt prompt. This will start the webserver
and enable code hot reloading / recompilation.

    $ sbt/bin/sbt
    > ~re-start

To build a new executable jar, you can instead run the `assembly` command:

    $ sbt/bin/sbt assembly

You should see a lot of program output, ending in the following three lines indicating the
location of the compiled package.

    [info] Packaging /home/ckahn/dev/concordia/comp479project/target/project3 ...
    [info] Done packaging.
    [success] Total time: 7 s, completed Nov 29, 2014 5:52:02 PM