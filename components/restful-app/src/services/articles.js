'use strict';

angular.module('restfulApp')
  .service('ArticlesResource', function(DrupalSettings, $http, $log) {

    /**
     * Create a new article.
     *
     * @param data
     *   The data object to POST.
     *
     * @returns {*}
     *   JSON of the newley created article.
     */
    this.createArticle = function(data) {
      return $http({
        method: 'POST',
        url: DrupalSettings.getBasePath() + 'api/v1/articles',
        data: jQuery.param(data),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          "X-CSRF-Token": DrupalSettings.getCsrfToken(),
          // Call the correct resource version (v1.5) that has the "body" and
          // "image" fields exposed.
          "X-Restful-Minor-Version": 5
        },
        withCredentials: true,
        serverPredefined: true
      });
    }
  });
