import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import './Contact.css';

const Contact = () => {
    const { isDark } = useTheme();
    const { language, translations } = useLanguage();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { contactSection } = translations[language];

    const onSubmit = async (data) => {
        try {
            console.log('Sending data:', data); // Debug log
            
            const response = await fetch('http://localhost:5000/api/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            console.log('Server response:', result); // Debug log

            if (result.success) {
                console.log('Message sent successfully!');
                alert(contactSection.alerts.success);
            } else {
                console.error('Server error:', result.error);
                alert(contactSection.alerts.error);
            }
        } catch (error) {
            console.error('Network error:', error);
            alert(contactSection.alerts.networkError);
        }
    };

    const renderFormField = (field, index) => {
        const isTextarea = field.type === 'textarea';
        const Component = isTextarea ? 'textarea' : 'input';
        const delay = index * 0.1 + 0.2;

        return (
            <motion.div
                className={`form-group ${index < 2 ? 'dual-inputs' : ''}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{
                    duration: 0.6,
                    delay,
                    type: "spring",
                    stiffness: 100,
                    damping: 10
                }}
                key={field.name}
            >
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{
                        duration: 0.4,
                        delay: delay + 0.2,
                        type: "spring",
                        stiffness: 200
                    }}
                >
                    <Component
                        {...register(field.name, {
                            required: true,
                            pattern: field.pattern
                        })}
                        placeholder={field.label} // Add placeholder text
                        type={field.type}
                        className={`form-input ${isTextarea ? 'textarea' : ''} ${errors[field.name] ? 'error' : ''}`}
                        rows={isTextarea ? "5" : undefined}
                    />
                    <label className="form-label">{field.label}</label>
                </motion.div>
            </motion.div>
        );
    };

    return (
        <motion.section
            className="contact section"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            style={{
                background: isDark ? 'var(--bg-secondary)' : 'var(--bg-primary)'
            }}
        >
            <motion.h2
                className="section-title outside-title"
                initial={{ y: -50 }}
                whileInView={{ y: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
            >
                Get in Touch
            </motion.h2>
            <motion.div
                className="contact-container"
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                style={{
                    background: isDark 
                        ? 'linear-gradient(165deg, rgba(35, 35, 35, 0.9) 0%, rgba(20, 20, 20, 0.95) 100%)'
                        : 'linear-gradient(165deg, rgba(255, 255, 255, 0.9) 0%, rgba(240, 240, 240, 0.95) 100%)'
                }}
            >
                <motion.p
                    className="section-subtitle"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    {contactSection.title}
                </motion.p>
                <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
                    {contactSection.formFields.map((field, index) => renderFormField(field, index))}

                    <motion.button
                        type="submit"
                        className="submit-button"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{
                            duration: 0.8,
                            type: "spring",
                            stiffness: 100,
                            damping: 10
                        }}
                        whileHover={{
                            scale: 1.02,
                            letterSpacing: "5px",
                        }}
                        whileTap={{
                            scale: 0.98,
                        }}
                        animate={{
                            boxShadow: [
                                "0 15px 35px -5px rgba(0, 0, 0, 0.5)",
                                "0 20px 40px -5px rgba(0, 0, 0, 0.6)",
                                "0 15px 35px -5px rgba(0, 0, 0, 0.5)"
                            ],
                            transition: {
                                duration: 2,
                                repeat: Infinity,
                                repeatType: "reverse"
                            }
                        }}
                    >
                        <motion.div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "10px"
                            }}
                        >
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                {contactSection.submitButton}
                            </motion.span>
                            <motion.span
                                animate={{
                                    x: [0, 5, 0],
                                    opacity: [1, 0.6, 1]
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    ease: "easeInOut"
                                }}
                                style={{ fontSize: "1.2rem" }}
                            >
                                ›
                            </motion.span>
                        </motion.div>
                    </motion.button>
                </form>
            </motion.div>
        </motion.section>
    );
};

export default Contact;
