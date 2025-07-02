import logging
import colorlog


# Define the log format and date format
log_format = (
    "[%(asctime)s] %(levelname)s [%(module)s:%(filename)s:%(funcName)s] %(message)s"
)
date_format = "%d/%b/%Y %H:%M:%S %Z"

# Configure the root logger
handler = colorlog.StreamHandler()
handler.setFormatter(
    colorlog.ColoredFormatter(
        log_format,
        datefmt=date_format,
        log_colors={
            "DEBUG": "bold_blue",
            "INFO": "bold_green",
            "WARNING": "bold_yellow",
            "ERROR": "bold_red",
            "CRITICAL": "bold_red,bg_white",
            "EXCEPTION": "bold_red,bg_white",
        },
    )
)
logging.basicConfig(
    handlers=[handler],
    level=logging.DEBUG,
    force=True,
)


def build_logger(log_file: str = "log.log"):
    logger = logging.getLogger()
    file_handler = logging.FileHandler(log_file)
    file_handler.setFormatter(logging.Formatter(fmt=log_format, datefmt=date_format))
    logger.addHandler(file_handler)
    return logger
