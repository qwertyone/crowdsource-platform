(function () {
    'use strict';

    angular
        .module('crowdsource.routes', ['ui.router'])
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    /**
     * @name config
     * @desc Define valid application routes
     */
    function config($stateProvider, $urlRouterProvider) {

        // Views
        var login = {
            controller: 'LoginController',
            controllerAs: 'vm',
            templateUrl: '/static/templates/authentication/login.html'
        };

        var feed_s = {
            controller: 'LoginController',
            controllerAs: 'vm',
            templateUrl: '/static/templates/authentication/study-auth.html'
        };

        var register = {
            controller: 'RegisterController',
            controllerAs: 'register',
            templateUrl: '/static/templates/authentication/register.html'
        };

        var forgotPassword = {
            controller: 'AuthSettingsController',
            controllerAs: 'auth',
            templateUrl: '/static/templates/authentication/forgot-password.html'
        };

        var resetPassword = {
            controller: 'AuthSettingsController',
            controllerAs: 'auth',
            templateUrl: '/static/templates/authentication/reset-password.html'
        };

        var changePassword = {
            controller: 'AuthSettingsController',
            controllerAs: 'auth',
            templateUrl: '/static/templates/authentication/change-password.html',
        };

        var activateAccount = {
            controller: 'AuthSettingsController',
            controllerAs: 'auth',
            templateUrl: '/static/templates/authentication/activate-account.html'
        };

        var navbar = {
            templateUrl: '/static/templates/layout/navbar.html',
            controller: 'NavbarController',
            controllerAs: 'vm'
        };

        var contributors = {
            controller: 'ContributorController',
            controllerAs: 'vm',
            templateUrl: '/static/templates/contributor/home.html'
        };

        var googleAuth = {
            controller: 'DriveController',
            templateUrl: '/static/templates/user/drive.html'
        };

        var profile = {
            templateUrl: '/static/templates/user/profile.html',
            controller: 'UserController',
            controllerAs: 'vm'
        };

        var requesterProfile = {
            templateUrl: '/static/templates/requester/home.html',
            controller: 'RequesterProfileController'
        };

        var paymentSuccess = {
            controller: 'PaymentController',
            controllerAs: 'vm',
            templateUrl: '/static/templates/payment/success.html'
        };
        var paymentCancelled = {
            controller: 'PaymentController',
            controllerAs: 'vm',
            templateUrl: '/static/templates/payment/cancelled.html'
        };

        var dashboard = {
            templateUrl: '/static/templates/dashboard/dashboard.html',
            controller: 'DashboardController',
            controllerAs: 'dashboard'
        };

        var createProject = {
            controller: 'ProjectController',
            controllerAs: 'project',
            templateUrl: '/static/templates/project/authoring.html'
        };

        var myProjects = {
            controller: 'MyProjectController',
            controllerAs: 'project',
            templateUrl: '/static/templates/project/my-projects.html'
        };

        var projectReview = {
            controller: 'ProjectReviewController',
            controllerAs: 'review',
            templateUrl: '/static/templates/project/submission-review.html'
        };

        var myTasks = {
            templateUrl: '/static/templates/project/my-tasks.html',
            controller: 'MyTasksController',
            controllerAs: 'myTasks'
        };

        var messages = {
            templateUrl: '/static/templates/message/base.html'
        };

        var taskFeed = {
            templateUrl: '/static/templates/task-feed/main.html',
            controller: 'TaskFeedController',
            controllerAs: 'taskfeed'
        };

        var task = {
            templateUrl: '/static/templates/task/base.html',
            controller: 'TaskController',
            controllerAs: 'task'
        };

        // States
        $stateProvider

            .state('login', {
                url: '/login',
                views: {
                    'content': login
                },
                authenticate: false
            })
            .state('feed-init', {
                url: '/feed-init/:token',
                views: {
                    'content': feed_s
                },
                authenticate: false
            })

            .state('register', {
                url: '/register',
                views: {
                    'content': register
                },
                authenticate: false
            })

            .state('change_password', {
                url: '/change-password',
                views: {
                    'content': changePassword
                },
                authenticate: false
            })

            .state('activate_account', {
                url: '/account-activation/:activation_key',
                views: {
                    'content': activateAccount
                },
                authenticate: false
            })

            .state('forgot_password', {
                url: '/forgot-password',
                views: {
                    'content': forgotPassword
                },
                authenticate: false
            })

            .state('reset_password', {
                url: '/reset-password/:reset_key/:enable',
                views: {
                    'content': resetPassword
                },
                authenticate: false
            })

            .state('google_auth', {
                url: '/api/google-auth-finish?:code',
                views: {
                    'navbar': navbar,
                    'content': googleAuth
                },
                authenticate: true
            })

            .state('contributors', {
                url: '/contributors',
                views: {
                    'navbar': navbar,
                    'content': contributors
                },
                authenticate: true
            })

            .state('dashboard', {
                url: '/dashboard',
                views: {
                    'navbar': navbar,
                    'content': dashboard
                },
                authenticate: true
            })

            .state('profile', {
                url: '/profile',
                views: {
                    'navbar': navbar,
                    'content': profile
                },
                authenticate: true
            })

            .state('requester', {
                url: '/requester',
                views: {
                    'navbar': navbar,
                    'content': requesterProfile
                },
                authenticate: true
            })

            .state('payment_success', {
                url: '/payment-success',
                views: {
                    'navbar': navbar,
                    'content': paymentSuccess
                },
                authenticate: true
            })

            .state('payment_cancelled', {
                url: '/payment-cancelled',
                views: {
                    'navbar': navbar,
                    'content': paymentCancelled
                },
                authenticate: true
            })

            .state('my_tasks', {
                url: '/my-tasks',
                views: {
                    'navbar': navbar,
                    'content': myTasks
                },
                authenticate: true
            })

            .state('create_project', {
                url: '/create-project/:projectId',
                views: {
                    'navbar': navbar,
                    'content': createProject
                },
                authenticate: true
            })

            .state('my_projects', {
                url: '/my-projects',
                views: {
                    'navbar': navbar,
                    'content': myProjects
                },
                authenticate: true
            })

            .state('project_review', {
                url: '/project-review/:projectId',
                views: {
                    'navbar': navbar,
                    'content': projectReview
                },
                authenticate: true,
                resolve: {
                    resolvedData: function ($stateParams, Project) {
                        return Project.retrieve($stateParams.projectId);
                    }
                }
            })

            .state('task', {
                url: '/task/:taskId/:returned?',
                views: {
                    'navbar': navbar,
                    'content': task
                },
                authenticate: true
            })

            .state('task_project', {
                url: '/task-feed/:projectId?',
                views: {
                    'navbar': navbar,
                    'content': taskFeed
                },
                authenticate: true
            })

            .state('task_feed', {
                url: '/',
                views: {
                    'navbar': navbar,
                    'content': taskFeed
                },
                authenticate: true
            })
        ;


        $urlRouterProvider.otherwise("/");
    }
})();
