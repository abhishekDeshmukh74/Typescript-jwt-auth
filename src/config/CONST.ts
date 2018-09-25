const env = process.env.NODE_ENV || 'development';

const ENV = require('../env/' + env + '.json');

export const CONST = {
    PORT: 'port',
    URL: ENV.URL,
    SUCCESS: 'success',
    APP_URL: ENV.APP_URL,
    SERVER_START_TEXT: 'App is running on port %d in %s mode',
    PORT_VALUE: ENV.PORT_VALUE,
    MESSAGE: 'Hello',
    LOG_HEADER: 'SRI-API',
    MORGAN_LOG_FORMAT: 'dev',
    CREATED_AT: 'created_at',
    UPDATED_AT: 'updated_at',
    SESSION_SECRET: 'F0l10Sr1',
    WRITE_TO_API_LOG_FILE: true,
    SALT_FACTOR: 10,
    EMAIL_REGEX: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    ACCESS_CONTROL_HEADERS: {
        ALLOW_ORIGIN: {
            NAME: 'Access-Control-Allow-Origin',
            VALUE: '*'
        },
        ALLOW_METHODS: {
            NAME: 'Access-Control-Allow-Methods',
            VALUE: 'GET,PUT,POST,DELETE,OPTIONS'
        },
        ALLOW_HEADERS: {
            NAME: 'Access-Control-Allow-Headers',
            VALUE: 'Origin, X-Requested-With, Content-Type, Accept'
        }
    },
    ENUM: {
        PENDING: 'pending',
        REJECTED: 'rejected',
        ACTIVE: 'active',
        BLOCKED: 'blocked',
        DISABLED: 'disabled',
        USER: 'user',
        ADMIN: 'admin'
    },
    AUTH: {
        LINKEDIN: {
            clientID: '86u66rpehto0k9',
            clientSecret: 'zgJerZuIhGwd1D0q',
            callbackURL: ENV.LINKEDIN_CB_URL,
            LINKEDIN_REDIRECT_URL: ENV.LINKEDIN_REDIRECT_URL,
            LINKEDIN_FAIL_URL: ENV.LINKEDIN_FAIL_URL,
            scope: ['r_emailaddress', 'r_basicprofile', 'rw_company_admin'],
            State: true
        },
        PASSPORT_LOCAL_STRATEGY: 'local',
        PASSPORT_LINKEDIN_STRATEGY: 'linkedin'
    },
    MODEL: {
        USER: 'UserModel',
        TRENDING_TOPIC: 'TrendingTopicModel',
        SECURITY_MASTER: 'SecurityMasterModel',
        SECURITY: 'SecurityModel',
        COMMENT: 'CommentModel',
        NOTIFICATION: 'NotificationModel',
        CATEGORY_VOTE: 'CategoryVoteModel',
        CATEGORY: 'CategoryModel',
        RATING: 'RatingModel'
    },
    DATABASE: {
        DB_OPEN: 'open',
        DB_ERROR: 'error',
        DB_URL: ENV.DB_URL,
        DB_CONNECT_SUCCESS: 'Successfully connected to database :D',
        DB_CONNECT_FAILURE_MESSAGE: 'Database connection error occured :('
    },
    DATABASE_COLLECTIONS: {
        UserRegistrationTypeMaster: 'userRegistrationTypeMaster',
        SecurityMaster: 'securityMaster',
        User: 'user',
        Rating: 'rating',
        Category: 'category',
        Security: 'security',
        Comment: 'comment',
        Notification: 'notification',
        TrendingTopic: 'trendingTopic',
        CategoryVote: 'Category Vote'
    },
    ENDPOINT: {
        BASE: '/',
        DOCS: '/docs',
        LOGS: '/logs',
        EXCEPTIONS: '/exceptions',
        USER: '/users',
        RATING: '/ratings',
        CATEGORY: '/categories',
        SECURITY: '/securities',
        NOTIFICATION: '/notifications',
        TRENDING_TOPIC: '/trendingTopics',
        SECURITY_MASTER: '/securityMaster',
        AUTH: {
            LOGIN: '/login',
            LOGOUT: '/logout',
            LINKEDIN_LOGIN: '/linkedinLogin',
            LINKEDIN_CB: '/linkedinLogin/cb',
            FORGOT: '/forgot',
            RESET: '/reset',
            VERIFICATION: '/verification'
        }
    },
    PASS_RESET_MAIL: {
        SUBJECT: 'FolioSRI consensus password reset'
    },
    PASS_RESET_SUCCESS_MAIL: {
        SUBJECT: 'Your password has been changed'
    },
    WELCOME_MAIL: {
        TEXT: 'Some text will go here',
        HTML: ''
    },
    VERIFICATION_MAIL: {
        TEXT: 'Verification mail',
        HTML: ''
    },
    STATUS: {
        OK: 200,
        CREATED: 201,
        ACCEPTED: 202,
        BAD_REQUEST: 400,
        UNAUTHORIZED: 401,
        NOT_FOUND: 404,
        INTERNAL_SERVER_ERROR: 500
    },
    MSGS: {
        USER: {
            ADDED: 'user added!',
            UPDATED: 'user updated!',
            DELETED: 'user deleted!',
            NOT_FOUND: 'user not found!',
            WITH_EMAIL_NOT_EXISTS: 'Error! No account with that email address  exists!',
            WITH_RESET_TOKEN_NOT_EXISTS: 'No user found with this Reset Token!',
            FOND_WITH_TOKEN: 'Found user with valid user token!',
            PASSWORD_CHANGED: 'Your password is changed successfully!',
            INVALID_PASS_TOKEN: 'Password reset token is invalid or has expired!',
            PASS_RESET_SUCCESS: 'password reset Success!',
            PASS_RESET_MAIL_SENT: 'password reset success mail is not sent!',
            PASS_RESET_MAIL_NOT_SENT: 'password reset mail is not sent!',
            WITH_VERIFY_TOKEN_NOT_EXISTS: 'No user found with this Verify Token!',
            PASS_HASH_MISMATCH: 'Entered password is not matching with current password',
            PASS_CHANGE_SUCCESS: 'Password change successful'
        },
        CATEGORY: {
            ADDED: 'category added!',
            UPDATED: 'category updated!',
            DELETED: 'category deleted!',
            NOY_FOUND: 'category not found!',
            PATCHED: 'category patched!'
        },
        NOTIFICATION: {
            ADDED: 'notification added!',
            UPDATED: 'notification updated!',
            DELETED: 'notification deleted!',
            NOY_FOUND: 'notification not found!',
            PATCHED: 'notification patched!',
            NOTIFICATION_NULL: 'No notifications of that query found!'
        },
        RATING: {
            RATING_NULL: 'No rating of that query found!'
        }
    },
    INVALID_EMAIL: 'Invalid Email Address!',
    INVALID_JSON: 'Invalid JSON!',
    NOT_FOUND: 'Endpoint not found!',
    AUTH_FAIL: 'Authentication failed!',
    LOGIN_SUCCESS: 'Login Successful!',
    LOGOUT_SUCCESS: 'Logout Successful!',
    ERROR_OCCURRED: 'error occurred!',
    WELCOME1: '<htmlxmlns="http://www.w3.org/1999/xhtml"><head><title></title><metahttp-equiv="Content-Type"content="text/html;charset=utf-8"/><metahttp-equiv="X-UA-Compatible"content="IE=edge"/><metaname="viewport"content="width=device-width,initial-scale=1.0"/><metaname="format-detection"content="telephone=no"/></head><body><divstyle="margin:0px;padding:0px;"align="center"></div><tablecellspacing="0"cellpadding="0"border="0"align="center"width=""bgcolor="#132436"><tbody><tr><tdalign="center"valign="top"width="600"style="border:1pxsolid#00546c;"><!--bannerimage--><tablewidth="100%"border="0"cellspacing="0"cellpadding="0"align="center"class="em_main_table"><tbody><tr><tdalign="left"valign="top"style="padding:25px0px25px25px;"><ahref="http://www.sriconsensus.com/"target="_blank"style="outline:none;"><imgalt="DavantiConsulting"title="DavantiConsulting"width="230"style="padding:0;margin:0;"src="cid:SRI_LOGO_URL"></a></td></tr></tbody></table><!--messagecontent--><tablewidth="100%"border="0"cellspacing="0"cellpadding="0"align="center"class="em_main_table"><tbody><tr><tdvalign="top"style="font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:24px;padding:20px25px15px25px;color:#fff;text-align:justify;">Hello',
    WELCOME2: ',</td></tr></tbody></table><tablewidth="100%"border="0"cellspacing="0"cellpadding="0"align="center"class="em_main_table"><tbody><tr><tdalign="left"valign="top"bgcolor="#00546c"><tablewidth="100%"border="0"cellspacing="0"cellpadding="0"align="center"class="em_main_table"><tr><tdvalign="top"style="font-family:Arial,Helvetica,sans-serif;font-size:35px;line-height:48px;padding:20px25px10px25px;color:#ffffff;text-align:left;">Welcome!</td></tr><tr><tdvalign="top"style="font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:24px;padding:0px25px20px25px;color:#ffffff;text-align:justify;">Loremipsumdolorsitamet,consecteturadipiscingelit.Etiamutiaculisquam.Crasegetnibhsitamet.</td></tr></table></td></tr></tbody></table><tablewidth="100%"border="0"cellspacing="0"cellpadding="0"align="center"class="em_main_table"><tbody><tr><tdalign="left"valign="top"><tablewidth="100%"border="0"cellspacing="0"cellpadding="0"align="center"class="em_main_table"style="text-align:justify;color:#fff;font-family:Arial,Helvetica,sans-serif;font-size:14px;"><tr><tdvalign="top"style="line-height:24px;padding:25px25px0px25px;">Loremipsumdolorsitamet,consecteturadipiscingelit.Etiamutiaculisquam.Crasegetnibhsitametodiotincidunthendreritnecidarcu.Curabituregetelitegeteratinterdumaliquameuquisnulla.</td></tr><tr><tdvalign="top"style="line-height:24px;padding:15px25px0px25px;">Nuncsedpretiummi,sitametvulputatelectus.Aeneanullamcorpercursusest,athendreritlectussuscipitvehicula.</td></tr><tr><tdvalign="top"style="line-height:24px;padding:15px25px25px25px">BestRegards,<br/>OrganizationName</td></tr></table></td></tr></tbody></table><!--footer--><tablewidth="100%"border="0"cellspacing="0"cellpadding="0"align="center"class="em_main_table"><tbody><tr><tdalign="center"valign="top"bgcolor="#00546c"><tablewidth="100%"border="0"cellspacing="0"cellpadding="0"align="center"><tr><tdalign="center"valign="middle"class="copyright"style="color:#fff;font-size:12px;font-family:Arial,Helvetica,sans-serif;padding:10px25px10px25px;text-align:center;font-weight:normal;">&copy;2018<ahref="#"target="_blank"style="outline:none;color:#fff;text-decoration:none!important;"><spanstyle="outline:none;color:#fff;text-decoration:none!important;">FolioFinancial,Inc.</span></a>Allrightsreserved</td></tr></table></td></tr></tbody></table></td></tr></tbody></table></div></body></html>'
};