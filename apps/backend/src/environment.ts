enum Environments {
  local_environment = 'local',
  dev_environment = 'dev',
  prod_environment = 'prod',
  qa_environment = 'qa',
}

class Environment {
  private environment: string;
  private mongoUrl: string;

  constructor(environment: string) {
    this.environment = environment;
    this.mongoUrl =
      'mongodb+srv://cccmongodb:ccc1_mongodb@cc-cluster.tyb3i.mongodb.net/nx_ng_ex_monorepo';
  }

  getPort(): number {
    if (this.environment === Environments.prod_environment) {
      return 8081;
    } else if (this.environment === Environments.dev_environment) {
      return 8082;
    } else if (this.environment === Environments.qa_environment) {
      return 8083;
    } else {
      return 3000;
    }
  }

  getDBName(): string {
    if (this.environment === Environments.prod_environment) {
      return 'db_nx_ng_exp_monorepo_prod';
    } else if (this.environment === Environments.dev_environment) {
      return 'db_nx_ng_exp_monorepo_dev';
    } else if (this.environment === Environments.qa_environment) {
      return 'db_nx_ng_exp_monorepo_qa';
    } else {
      return 'db_nx_ng_exp_monorepo_local';
    }
  }

  getMongoUrl(): string {
    return this.mongoUrl;
  }
}

export default new Environment(Environments.local_environment);
