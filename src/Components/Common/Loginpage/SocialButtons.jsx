import React from 'react'
import { Button, Grid } from '@mui/material'
import { FaGoogle, FaGithub } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function SocialButtons({ onGoogle, onGithub }) {
  return (
    <div className="social-glass p-3 rounded-lg mt-3">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<FaGoogle />}
              onClick={onGoogle}
              className="social-btn"
              sx={{ borderColor: '#DB4437', color: '#DB4437' }}
            >
              Google
            </Button>
          </motion.div>
        </Grid>
        <Grid item xs={6}>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<FaGithub />}
              onClick={onGithub}
              className="social-btn"
              sx={{ borderColor: '#333', color: '#333' }}
            >
              GitHub
            </Button>
          </motion.div>
        </Grid>
      </Grid>
    </div>
  )
}
