import { motion } from "framer-motion"

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

export function HomeView() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={{ duration: 0.3 }}
      className="p-4"
    >
      {/* Home content */}
    </motion.div>
  )
}

export function GroupsView() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={{ duration: 0.3 }}
      className="p-4"
    >
      {/* Groups content */}
    </motion.div>
  )
}

export function ActionItemsView() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={{ duration: 0.3 }}
      className="p-4"
    >
      {/* Action Items content */}
    </motion.div>
  )
}

export function AutomationsView() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={{ duration: 0.3 }}
      className="p-4"
    >
      {/* Automations content */}
    </motion.div>
  )
}

export function InsightsView() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={{ duration: 0.3 }}
      className="p-4"
    >
      {/* Insights content */}
    </motion.div>
  )
} 