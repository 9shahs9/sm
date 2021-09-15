===========================================================================================================

HOW TO RUN:

1. run "npm install" in the repo directory.
2. optionally run "mocha" to perform unit testing. This will iron out any connectivity issues and / or functionality issues in the code.
3. run "npm start" from the repo directory.

===========================================================================================================

===========================================================================================================

TECHNICAL DEBT: 

1. request-promise is a deprecated package can be replaced with axios. 
2. Auto refresh of the token in the Authentication.js is not tested, technically must work as only additional line in there is setInterval function usage.
3. The api call parameters and options are not made configurable, this can be improved.
4. Dynamic loading of various metric modules in SuperMetrics.js can be done programmatically using glob mechanism, Insufficient time to read and implement this feature.
5. MonthlyMessageMetrics can be broken down into two modules, 1) AveragePostLength and 2) MaxLengths, but as the processing is similar, thought I can save one more loop through the posts.
6. Error Handling is not implemented to be production ready.
7. Parameterize number of times posts api is going to be called.
8. Code optimisations can be done, but in general a better approach will be delink the auth/post retreival process with computing metrics process. As an example once the posts are retreived, store them in MongoDB and write mongoDB nodejs scripts to do the aggregations and computations might be far more efficient.
===========================================================================================================

