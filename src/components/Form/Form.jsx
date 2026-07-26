import { useState, useRef, useEffect } from "react";
import styles from "./Form.module.scss";

const PROFILES = ["Бизнес-процессы", "Планирование и развитие туризма"];

const INITIAL_FIELDS = { name: "", phone: "", email: "" };

export default function Form() {
  const [open, setOpen] = useState(false);
  const [profile, setProfile] = useState("");
  const [fields, setFields] = useState(INITIAL_FIELDS);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const selectRef = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (selectRef.current && !selectRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  function handleFieldChange(e) {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!fields.name.trim() || !fields.phone.trim()) {
      setStatus("error");
      setErrorMessage("Заполните, пожалуйста, ФИО и телефон.");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/send.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fields, profile }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok || !data?.success) {
        throw new Error(data?.message || "Не удалось отправить заявку");
      }

      setStatus("success");
      setFields(INITIAL_FIELDS);
      setProfile("");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err.message || "Не удалось отправить заявку. Попробуйте позже.");
    }
  }

  return (
    <section className={styles.form} id="form">
      <div className="wrap">
        <div className={styles.form__inner}>
          <h2 className={styles.form__title}>Оставить заявку</h2>
          <p className={styles.form__subtitle}>
            Хотите получить консультацию по поступлению или следить за новостями приёма?
            <br />
            Оставьте свои контакты – мы свяжемся с вами.
          </p>

          <form onSubmit={handleSubmit}>
            <div className={styles.form__grid}>
              <input
                className={styles.form__field}
                type="text"
                name="name"
                placeholder="ФИО"
                value={fields.name}
                onChange={handleFieldChange}
                autoComplete="name"
                required
              />
              <input
                className={styles.form__field}
                type="tel"
                name="phone"
                placeholder="Телефон"
                value={fields.phone}
                onChange={handleFieldChange}
                autoComplete="tel"
                required
              />
              <input
                className={styles.form__field}
                type="email"
                name="email"
                placeholder="Email"
                value={fields.email}
                onChange={handleFieldChange}
                autoComplete="email"
              />

              <div className={styles.form__select} ref={selectRef}>
                <button
                  type="button"
                  className={`${styles.form__selectBtn} ${profile ? styles.form__selectBtn_filled : ""}`}
                  onClick={() => setOpen((v) => !v)}
                >
                  {profile || "Интересующий профиль"}
                  <svg
                    className={`${styles.form__chevron} ${open ? styles.form__chevron_open : ""}`}
                    viewBox="0 0 22 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 1L11 10L21 1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {open && (
                  <div className={styles.form__options}>
                    {PROFILES.map((p) => (
                      <div
                        key={p}
                        className={styles.form__option}
                        onClick={() => {
                          setProfile(p);
                          setOpen(false);
                        }}
                      >
                        {p}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <button type="submit" className={styles.form__submit} disabled={status === "sending"}>
              {status === "sending" ? "Отправка..." : "Отправить"}
            </button>

            {status === "success" && (
              <p className={`${styles.form__status} ${styles.form__status_success}`}>
                Заявка отправлена! Мы свяжемся с вами в ближайшее время.
              </p>
            )}
            {status === "error" && (
              <p className={`${styles.form__status} ${styles.form__status_error}`}>
                {errorMessage}
              </p>
            )}
          </form>

          <p className={styles.form__footer}>
            Отправьте эту форму на почту hsm@rudn.ru или позвоните в приёмную комиссию +7 (999) 880-45-67.
          </p>
        </div>
      </div>
    </section>
  );
}
