OAuth
Recommend 2.0
https://www.oauth.com/oauth2-servers/differences-between-oauth-1-2/ to view some differences.
1.0 and 2.0 are not compatible
Library: Authlib
Reason for Authlib use is because it contains support for Flask use and the main use of OAuth.

Authlib as shown here: https://docs.authlib.org/en/stable/ contains OAuth1.0 and 2.0. It also includes implementation in frameworks like django and Flask.

Use pip to install
To install with flask use:
$ pip install Authlib Flask

To install with request use:
$ pip install Authlib requests

For more installation refer to: https://docs.authlib.org/en/stable/basic/install.html


Understanding OAuth

OAuth 2.0 Roles (https://docs.authlib.org/en/stable/oauth/2/intro.html#intro-oauth2, Provides basic introduction to OAuth 2.0)
Here is some basic info from the link to understand OAuth a bit.

Client: a client is a third-party application, in this case, it is your application.
Resource Owner: the users and orgs on GitHub are the resource owners, since they own their source code (resources).
Resource Server: The API servers of GitHub. Your client will make requests to the resource server to fetch source code. The server serves resources.
Authorization Server: The server for client to obtain an access token.

Flow:
Application prompts user to login.
User clicks login and application leads to an authorization server.
User clicks allow to tell application they have granted the app access.
Authorization Server issues an access token to your application
Application uses access token to fetch resource


Authentication Methods (From above link for more information):
none: The client is a public client, no client_secret.
client_secret_post: Client uses HTTP POST parameters.
client_secret_basic: Uses HTTP basic authorization


Token Scopes:
A token that provides access only within a small area/scope, it does not have access to anything else.


Refer to https://docs.authlib.org/en/stable/client/oauth2.html for a more detailed way on how OAuth works and how it correlates with the above.




How to Use:
Install Flask-Oauth package with pip.
Import and define client from FLask-OAuth Client. (https://docs.authlib.org/en/latest/client/flask.html)
Define two routes to log in and the authorized route. (use above)
Register an OAuth authentication with OAuth register.
Implement the login auth type into the routes. 
Get Client ID and CLient secret.




Other Useful Quick Links:

Index for OAuth: https://docs.authlib.org/en/stable/client/index.html

Guide on how to use OAuth with Flask Support: https://docs.authlib.org/en/stable/client/flask.html
https://docs.authlib.org/en/stable/flask/2/index.html


Using OAuth for login: https://docs.authlib.org/en/stable/client/frameworks.html#using-oauth-2-0-to-log-in

Using OAuth requests: https://docs.authlib.org/en/stable/client/requests.html






