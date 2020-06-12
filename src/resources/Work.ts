import Skill from './Skill';

interface WorkData {
  title: string;
  detail: string;
  skills: Skill[];
}

const data: WorkData[] = [
  {
    title: 'FunCalendar',
    detail:
      '高専時代に複数人で作成した，カレンダー，ウィッシュリスト，ToDo，家計簿の機能を持ったマルチプラットフォームアプリケーション．ローカルストレージだけでなくリモートストレージを使ってデータの保存をできるように実装を行った．',
    skills: [
      'C#',
      'Xamarin',
      'Python 3',
      'Flask',
      'VPS',
      'Linux',
      'Nginx',
      'MariaDB'
    ]
  },
  {
    title: 'acc',
    detail:
      'AtCoder用のテスト・提出をターミナル上で簡単に行うための自作コマンド．コンパイル，インタプリタの言語に対応できるように実装した．',
    skills: ['Rust']
  }
];

export default data;
