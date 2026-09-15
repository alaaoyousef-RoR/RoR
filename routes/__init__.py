# Routes Package Initializer
from routes.auth import auth_bp
from routes.api_sales import sales_bp
from routes.api_operations import operations_bp

__all__ = ['auth_bp', 'sales_bp', 'operations_bp']
