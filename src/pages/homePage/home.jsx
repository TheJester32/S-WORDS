import React from "react";
import homeStyles from './home.module.scss';
import { Game } from "../../components/game";

function InstallBoard() {
  return (
    <>
      <main className={homeStyles.main}>
        <h1>test</h1>
        <section className={homeStyles.main__game}>
          <Game />
        </section>
      </main>
    </>
  );
}

export { InstallBoard };
