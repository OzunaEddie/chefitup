import os
from dotenv import load_dotenv
from flask import Flask
from flask_mysqldb import MySQL


load_dotenv()


db = MySQL()


def create_app():
    # create and configure the app
    app = Flask(__name__)
    app.config['SECRET_KEY'] = os.urandom(12)
    # database connection credentials
    app.config['MYSQL_USER'] = os.getenv("MYSQL_USER")
    app.config['MYSQL_PASSWORD'] = os.getenv("MYSQL_PASSWORD")
    app.config['MYSQL_HOST'] = os.getenv("MYSQL_HOST")
    app.config['MYSQL_DB'] = os.getenv("MYSQL_DB")
    app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
    app.config['SESSION_COOKIE_SAMESITE'] = "Strict"

    app.config.update(
        MAIL_SERVER=os.getenv("MAIL_SERVER"),
        MAIL_PORT=os.getenv("MAIL_PORT"),
        MAIL_USE_SSL=True,
        MAIL_USERNAME=os.getenv("MAIL_USERNAME"),
        MAIL_PASSWORD=os.getenv("MAIL_PASSWORD"),
        MAIL_DEFAULT_SENDER=os.getenv("MAIL_DEFAULT_SENDER")
    )

    db.init_app(app)

    from server.controllers import user_controller
    app.register_blueprint(user_controller.bp)

    from server.controllers import customer_profile_controller
    app.register_blueprint(customer_profile_controller.bp)

    from server.controllers import menu_controller
    app.register_blueprint(menu_controller.bp)

    from server.controllers import employee_profile_controller
    app.register_blueprint(employee_profile_controller.bp)

    from server.controllers import cart_controller
    app.register_blueprint(cart_controller.bp)

    from server.controllers import reservation_controller
    app.register_blueprint(reservation_controller.bp)

    from server.controllers import warning_controller
    app.register_blueprint(warning_controller.bp)

    from server.controllers import dispute_controller
    app.register_blueprint(dispute_controller.bp)

    return app
