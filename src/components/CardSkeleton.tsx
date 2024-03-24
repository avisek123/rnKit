import {Pressable, StyleSheet} from 'react-native';
import React, {memo} from 'react';
import {SkeletonLoader} from './core';

interface CardSkeletonProps {
  length?: number; // Optional prop to specify the number of skeleton views
}

const CardSkeleton: React.FC<CardSkeletonProps> = ({
  length,
}: CardSkeletonProps) => {
  return (
    <>
      {Array.from({length: length ?? 9}).map((_, index) => (
        <Pressable
          key={index}
          style={{
            marginHorizontal: 10,
            marginTop: 10,
          }}>
          <SkeletonLoader
            wrapperStyle={{
              width: '100%',
              padding: 5,
              borderRadius: 10,
            }}
          />
        </Pressable>
      ))}
    </>
  );
};

export default memo(CardSkeleton);

const styles = StyleSheet.create({});
