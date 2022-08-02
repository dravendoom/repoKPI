class UserController < ApplicationController
    before_action :authenticate_user!, except[:send_new_password]
end