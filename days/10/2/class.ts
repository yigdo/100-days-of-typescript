class Logger {
  _logMessages: Array<string> = [];

  constructor() {
    this._logMessages.push("Logger Started!");
  }

  addMessage(logMessage: string): void {
    this._logMessages.push(logMessage);
  }

  logToConsole(): void {
    this._logMessages.map((logMessage: string) => {
      console.log(`New Log Message: ${logMessage}`);
    });
  }
}

const ApplicationCycle = (callbackFunction: any): void => {
  setTimeout(function () {
    callbackFunction();
    ApplicationCycle(callbackFunction);
  }, 1000);
};

const run = async (): Promise<void> => {
  console.log("App started!");

  const _logger = new Logger();
  _logger.addMessage("Hey!");

  await ApplicationCycle(() => {
    _logger.logToConsole();
  });
};
run();

module.exports = {};